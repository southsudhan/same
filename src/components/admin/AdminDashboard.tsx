import { useState } from 'react';
import { Layout, Menu, Typography, Card, Table, Button, Space } from 'antd';
import { 
  DashboardOutlined, 
  UserOutlined, 
  TransactionOutlined,
  SecurityScanOutlined,
  SettingOutlined 
} from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: 'users', icon: <UserOutlined />, label: 'Users' },
    { key: 'transactions', icon: <TransactionOutlined />, label: 'Transactions' },
    { key: 'security', icon: <SecurityScanOutlined />, label: 'Security' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' }
  ];

  const userColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link">Edit</Button>
          <Button type="link" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard']}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <Title level={4} style={{ margin: '16px 24px' }}>Admin Dashboard</Title>
        </Header>
        <Content style={{ margin: '24px 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Card title="System Overview" style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <Card title="Total Users">1,234</Card>
                <Card title="Active Trades">567</Card>
                <Card title="Daily Volume">$1.2M</Card>
              </div>
            </Card>
            
            <Card title="Recent Users">
              <Table columns={userColumns} dataSource={[]} />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;