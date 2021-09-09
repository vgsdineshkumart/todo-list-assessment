import React from 'react';
import { Button, Card, Label } from '../common/styled-components';

const Nodata = ({
  showDetailsModal
}) => {
  return (
    <Card>
      <Label>You have no task.</Label>
      <Button type={'button'} onClick={() => showDetailsModal(true)}>+ New Task</Button>
    </Card>)
}

export default Nodata