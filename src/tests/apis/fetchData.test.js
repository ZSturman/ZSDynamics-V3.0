import { render, waitFor } from '@testing-library/react';
import Posts from '../components/Posts';

jest.mock('../utils/api', () => ({
  fetchPosts: jest.fn().mockResolvedValue([{ id: 1, title: 'Test Post' }])
}));

describe('Posts Component', () => {
  test('displays posts fetched from API', async () => {
    const { getByText } = render(<Posts />);
    await waitFor(() => {
      expect(getByText('Test Post')).toBeInTheDocument();
    });
  });
});
