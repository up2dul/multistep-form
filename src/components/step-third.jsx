import { Container, FileInput, MultiSelect, Radio, Textarea, Title } from '@mantine/core';
import {
  levelList,
  stackList,
  experienceList,
  learnList,
  sourcesInfoList
} from '@/utils/input-options';
import { IoFileTray } from 'react-icons/io5';

export function StepThird() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        The last one, <br /> 🧑 Tell us more about you
      </Title>
      <Radio.Group
        mb={25}
        orientation='vertical'
        label='Expertise level in web development'
        withAsterisk>
        {levelList.map((level, idx) => (
          <Radio key={idx} value={level} label={level} />
        ))}
      </Radio.Group>
      <Radio.Group
        mb={25}
        orientation='vertical'
        label='Focus stack on web development'
        withAsterisk>
        {stackList.map((stack, idx) => (
          <Radio key={idx} value={stack} label={stack} />
        ))}
      </Radio.Group>
      <Radio.Group mb={25} orientation='vertical' label='Work experience' withAsterisk>
        {experienceList.map((experience, idx) => (
          <Radio key={idx} value={experience} label={experience} />
        ))}
      </Radio.Group>
      <FileInput
        mb={25}
        icon={<IoFileTray />}
        label='Upload your Resume/CV'
        placeholder='Upload here'
        description='Optional. Can be in PDF or any other format file'
      />
      <MultiSelect
        mb={25}
        data={learnList}
        label='How did you learn to code and programming before?'
        placeholder='Pick here'
        description='You can choose more than 1'
        withAsterisk
      />
      <MultiSelect
        mb={25}
        data={sourcesInfoList}
        label='Where did you know about this bootcamp?'
        placeholder='Pick here'
        description='You can choose more than 1'
        withAsterisk
      />
      <Textarea
        mb={25}
        label="What's your motivation to joining in this bootcamp?"
        description='Explain briefly and clearly'
        withAsterisk
      />
      <Textarea
        mb={25}
        label='Do you have any question or feedback?'
        description='Must be related to this bootcamp'
      />
    </Container>
  );
}
