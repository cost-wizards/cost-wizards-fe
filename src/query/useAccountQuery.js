import { useQuery } from 'react-query';
import { fetchAccountDetail, fetchAccounts } from '../services/account';

export const useAccountListQuery = () => {
	const queryKey = ['account-list'];

	const query = useQuery(queryKey, async () => {
		return await fetchAccounts();
	});
	return {
		...query,
	};
};

export const useAccountDetailQuery = ({ payload }) => {
	const queryKey = ['account-detail', payload];

	const { id } = payload;

	const query = useQuery(queryKey, async () => {
		return fetchAccountDetail(id);
	});

	return {
		...query,
	};
};
