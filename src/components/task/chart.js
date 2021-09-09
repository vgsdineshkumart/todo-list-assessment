import React from 'react';
import { CardWrapper } from '../common/styled-components';
import { PieChart } from 'react-minimal-pie-chart';

const TasksChart = ({
  completed,
  total
}) => {
  return (
    <CardWrapper>
      <PieChart
        startAngle={270}
        paddingAngle={(total === completed || completed === 0) ? 0 : 3}
        data={[
          { value: completed, color: '#5285EC' },
          { value: (total - completed), color: '#E8ECEC' }
        ]}
      />
    </CardWrapper>
  )
}

export default TasksChart