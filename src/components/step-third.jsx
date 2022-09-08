import { useForm } from 'react-hook-form';
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

import {
  levelList,
  stackList,
  experienceList,
  thirdRadioList as radioList,
  thirdMultiList as multiList,
  thirdTextareaList as textareaList,
  thirdFileProps
} from '@/utils';
import { StepperLayout } from '@/components';
import { useFormStore, useStepStore } from '@/store';

export function StepThird() {
  const { setPrevStep, setNextStep } = useStepStore((state) => state);

  const { thirdForm, setThirdForm } = useFormStore((state) => state);

  const { register, handleSubmit } = useForm({ defaultValues: thirdForm || {} });

  const onSubmit = (data) => {
    console.log('third:', data);
    setThirdForm(data);
    setNextStep();
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        The last one, <br /> 🧑 Tell us more about you
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='xl'>
          <Radio.Group {...radioList[0]}>
            {levelList.map((level, idx) => (
              <Radio key={idx} value={level} label={level} {...register(radioList[0].name)} />
            ))}
          </Radio.Group>
          <Radio.Group {...radioList[1]}>
            {stackList.map((stack, idx) => (
              <Radio key={idx} value={stack} label={stack} {...register(radioList[1].name)} />
            ))}
          </Radio.Group>
          <Radio.Group {...radioList[2]}>
            {experienceList.map((experience, idx) => (
              <Radio
                key={idx}
                value={experience}
                label={experience}
                {...register(radioList[2].name)}
              />
            ))}
          </Radio.Group>

          <FileInput {...thirdFileProps} {...register('resume')} />

          {multiList.map((props, idx) => (
            <MultiSelect key={idx} {...props} {...register(props.name)} />
          ))}

          {textareaList.map((props, idx) => (
            <Textarea key={idx} {...props} {...register(props.name)} />
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
