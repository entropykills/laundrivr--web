import { SimpleGrid } from '@chakra-ui/react';
import { StatisticBox, StatisticBoxProps } from '../../../components/stat/StatisticBox';

export const DefaultDashboardPage = () => {
  const stats: StatisticBoxProps[] = [
    {
      label: 'Total Users',
      value: '1,015',
      helpText: '155%',
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
