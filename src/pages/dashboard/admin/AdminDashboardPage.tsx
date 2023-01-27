import { SimpleGrid } from '@chakra-ui/react';
import { StatisticBox, StatisticBoxProps } from '../../../components/stat/StatisticBox';

export const AdminDashboardPage = () => {
  const stats: StatisticBoxProps[] = [
    {
      label: 'Total Sales',
      value: '$12,303.76',
      helpText: '930%',
      arrow: 'increase'
    }
  ];
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
      {stats.map(({ label, value, helpText, arrow }) => (
        <StatisticBox key={label} label={label} value={value} helpText={helpText} arrow={arrow} />
      ))}
    </SimpleGrid>
  );
};
