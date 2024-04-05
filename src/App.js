import { ConfigProvider } from 'antd';
import './App.css';
import Main from './pages/Main';

function App() {
	return (
		<ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
			<Main />
		</ConfigProvider>
	);
}

export default App;
