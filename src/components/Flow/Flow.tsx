import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
  useReactFlow,
} from 'reactflow';
import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import 'reactflow/dist/style.css';
import { FlowContainer } from './styles';
import { ModalContainer } from '../Card/styles';

const initialNodes: Node[] = [
  { id: '1', position: { x: 10, y: 10 }, data: { label: 'Inicio' } },
  { id: '2', position: { x: 10, y: 100 }, data: { label: 'Acerca de' } },
  { id: '3', position: { x: 10, y: 200 }, data: { label: 'Productos' } },
];

let nodeId = initialNodes.length;

const initialEdges: Edge[] = [];

const Flow = () => {
  // states
  const [closeModal, setCloseModal] = useState(false);
  const [nodeName, setNodeName] = useState('');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  //   connections
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  //   to add new node
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let currentNodeID: string = '';

  //   handle close modal
  const handleClose = (e: any) => {
    currentNodeID = e.target.getAttribute('data-id');
    if (closeModal === false) {
      setNodeName(e.target.innerText);
    }
    console.log('current node --> ', typeof currentNodeID);
    setCloseModal(!closeModal);
  };

  //   handle update name
  const handleUpdate = (e: any) => {
    setNodeName(e.nodename);
    setCloseModal(!closeModal);
  };

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === currentNodeID) {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        console.log(nodeName);

        return node;
      })
    );
  }, [currentNodeID, nodeName, setNodes]);

  return (
    <>
      <FlowContainer>
        <ReactFlow
          onNodeClick={handleClose}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>

        <button onClick={onClick} className='btn'>
          Agregar
        </button>
      </FlowContainer>
      <Modal
        style={{
          content: { width: '320px', height: '320px', margin: '0 auto' },
        }}
        isOpen={closeModal}
        ariaHideApp={false}
      >
        <ModalContainer>
          <span onClick={handleClose} className='close'>
            X
          </span>
          <Formik
            initialValues={{ nodename: nodeName }}
            onSubmit={handleUpdate}
          >
            <Form
              style={{
                height: '15rem',
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Field type='text' name='nodename' />
              <button type='submit'>Update</button>
            </Form>
          </Formik>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Flow;
