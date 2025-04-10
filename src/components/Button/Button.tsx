import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
	children: ReactNode;
	onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			type='button'
			tabIndex={0}
		>
			{children}
		</button>
	);
};
