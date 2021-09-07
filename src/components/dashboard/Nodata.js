import Card from '../common/card';
import Label from '../common/label';
import Button from '../common/button';
import React from 'react';

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