import { ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CheckBox.module.scss';
interface Props {
	children: ReactNode;
	onToggle: () => void;
}

export const CheckBox: React.FC<Props> = ({ children, onToggle }) => {
	const [isChecked, setIsChecked] = useState(false);
	const checkboxId = uuidv4();
	const handleChange = () => {
		onToggle();
		setIsChecked((isChecked) => !isChecked);
	};

	return (
		<label className={styles.label} htmlFor={checkboxId}>
			<input
				className={styles.checkbox}
				type='checkbox'
				id={checkboxId}
				checked={isChecked}
				onChange={handleChange}
			/>

			{children}
		</label>
	);
};
