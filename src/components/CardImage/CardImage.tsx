import styles from './CardImage.module.scss';

interface Props {
	src: string;
	alt: string;
}

export const CardImage: React.FC<Props> = ({ src, alt }) => {
	return <img className={styles.img} src={src} alt={alt} />;
};
