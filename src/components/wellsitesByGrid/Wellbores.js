import React from 'react'
import {Panel, Button, ButtonGroup, Col, Tabs, Tab } from 'react-bootstrap'
import Tree from 'rc-tree'

const Wellbores = props => {
	const {wellboreName = 'Wellbore'} = props
	const treeButtonToolbar = <ButtonGroup>

	<Button>Add</Button>
	<Button>Delete</Button>
	</ButtonGroup >

	const data = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];



	return <div>
			<Col sm={3}>
			<Panel header={wellboreName} footer={treeButtonToolbar}>
				<Tree />
			</Panel>
			</Col>
			<Col sm={9}>
				<Panel>
					<Tabs id="uncontrolled-tab">
						<Tab title="Info" eventKey={1}>
						</Tab>
						<Tab title="Trajectory" eventKey={2}>
						</Tab>
						<Tab title="Completion" eventKey={3}>
						</Tab>
					</Tabs>
				</Panel>
			</Col>
	</div>
}
export default Wellbores