import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TransactionsPage from '../../../pages/transactions';

describe('TransactionsPage' ,() => {

    describe('renders', () => {
        test('should render transactions list', () => {
            render(<TransactionsPage />);

            const title = screen.getByRole('heading', {level: 1});

            expect(title).toHaveTextContent('Transactions page');
        });
    });

});
