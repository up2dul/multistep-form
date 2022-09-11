import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Container,
  FileInput,
  MultiSelect,
  Radio,
  Stack,
  Textarea,
  Title
} from '@mantine/core';

import { useFormStore, useStepStore } from '@/store';
import {
  levelList,
  stackList,
  experienceList,
  thirdRadioProps as radioProps,
  thirdMultiProps as multiProps,
  thirdTextareaProps as textareaProps,
  resumeFileProps,
  thirdSchema
} from '@/utils';
import { StepperLayout } from '@/components';

export function StepThird() {
  const { setPrevStep, setNextStep } = useStepStore((state) => state);

  const {
    secondForm: { gender },
    thirdForm,
    setThirdForm
  } = useFormStore((state) => state);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    control
  } = useForm({
    defaultValues: thirdForm || {},
    resolver: yupResolver(thirdSchema)
  });

  const onSubmit = (data) => {
    console.log('third:', data);
    setThirdForm(data);
    setNextStep();
  };

  const handleBlur = () => {
    const data = getValues();
    setThirdForm(data);
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        The last one, <br /> {gender === 'male' ? '🧑' : '👩'} Tell us more about you
      </Title>

      <form onBlur={handleBlur} onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
        <Stack spacing='xl'>
          <Radio.Group {...radioProps[0]} error={errors.level?.message}>
            {levelList.map((level, idx) => (
              <Radio key={idx} value={level} label={level} {...register('level')} />
            ))}
          </Radio.Group>
          <Radio.Group {...radioProps[1]} error={errors.stack?.message}>
            {stackList.map((stack, idx) => (
              <Radio key={idx} value={stack} label={stack} {...register('stack')} />
            ))}
          </Radio.Group>
          <Radio.Group {...radioProps[2]} error={errors.experience?.message}>
            {experienceList.map((experience, idx) => (
              <Radio key={idx} value={experience} label={experience} {...register('experience')} />
            ))}
          </Radio.Group>

          <Controller
            name='resume'
            control={control}
            render={({ field }) => (
              <FileInput {...resumeFileProps} {...field} error={errors.resume?.message} />
            )}
          />

          {multiProps.map((props, idx) => (
            <Controller
              key={idx}
              name={props.name}
              control={control}
              render={({ field }) => (
                <MultiSelect key={idx} {...props} {...field} error={errors[props.name]?.message} />
              )}
            />
          ))}

          {textareaProps.map((props, idx) => (
            <Controller
              key={idx}
              name={props.name}
              control={control}
              render={({ field }) => (
                <Textarea key={idx} {...props} {...field} error={errors[props.name]?.message} />
              )}
            />
          ))}
        </Stack>

        <StepperLayout>
          <Button variant='default' onClick={setPrevStep}>
            Back
          </Button>
          <Button type='submit'>Next</Button>
        </StepperLayout>
      </form>
    </Container>
  );
}
