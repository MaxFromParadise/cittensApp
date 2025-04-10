import { useEffect, useState } from 'react';
import { getRandomCatImage } from '../../utils/getRandomCatImage';
import { Button } from '../Button/Button';
import { CardImage } from '../CardImage/CardImage';
import { CheckBox } from '../CheckBox/CheckBox';
import { Loader } from '../Loader/Loader';
import styles from './Card.module.scss';

export const Card = () => {
	const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
	const [currentImage, setCurrentImage] = useState<string>('');
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	const [isAutorefrash, setIsAutorefrash] = useState<boolean>(false);

	useEffect(() => {
		getRandomImage();
	}, []);
	useEffect(() => {
		if (currentImage) {
			setIsImageLoading(false);
		}
	}, [currentImage]);
	useEffect(() => {
		if (isEnabled) {
			if (!isAutorefrash) return;

			const intervalId = setInterval(() => {
				getRandomImage();
			}, 5000);

			return () => clearInterval(intervalId);
		}
	}, [isAutorefrash, isEnabled]);

	const getRandomImage = async () => {
		setIsImageLoading((isImageLoading) => !isImageLoading);
		setCurrentImage(await getRandomCatImage());
		setIsImageLoading((isImageLoading) => !isImageLoading);
	};
	return (
		<article className={styles.card}>
			<form>
				<div className={styles.checkboxes}>
					<CheckBox
						onToggle={() => {
							setIsEnabled((isEnabled) => !isEnabled);
						}}
					>
						Enabled
					</CheckBox>
					<CheckBox
						onToggle={() => {
							setIsAutorefrash((isAutorefrash) => !isAutorefrash);
						}}
					>
						Auto-refrash every 5 seconds
					</CheckBox>
				</div>
				<Button onClick={getRandomImage}>Get cat</Button>
			</form>
			<div className={styles['card__img-container']}>
				{isImageLoading ? (
					<Loader />
				) : isEnabled ? (
					<CardImage src={currentImage} alt='cat image' />
				) : (
					<div>Enable images</div>
				)}
			</div>
		</article>
	);
};
