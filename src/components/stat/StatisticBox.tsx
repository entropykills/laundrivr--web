import { Box, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

export interface StatisticBoxProps {
  label: string;
  value: string;
  helpText?: string;
  arrow?: 'increase' | 'decrease';
}

export const StatisticBox = (props: StatisticBoxProps) => {
  const { label, value, helpText, arrow, ...boxProps } = props;
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow="sm"
      {...boxProps}
      backgroundColor="white">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        {props.helpText && (
          <StatHelpText>
            {arrow === 'increase' && <StatArrow type="increase" />}
            {arrow === 'decrease' && <StatArrow type="decrease" />}
            {helpText}
          </StatHelpText>
        )}
      </Stat>
    </Box>
  );
};
