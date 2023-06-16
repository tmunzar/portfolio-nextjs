import { cx } from '../../utils'
import Tag, { ITagProps } from '../Tag'
import styles from './WorkListing.module.scss'

interface IWorkListingProps {
  title: string
  description: React.ReactNode
  img?: React.ComponentPropsWithoutRef<'img'>
  imgHolderClassName?: string
  tags: ITagProps[]
  children: React.ReactNode
  annotation?: React.ReactNode
}

export const WorkListing = (props: IWorkListingProps) => {
  const {
    title,
    description,
    img,
    imgHolderClassName,
    tags,
    children,
    annotation,
  } = props
  return (
    <div className={styles.root}>
      <div className={`columns ${styles.content}`}>
        <div className={cx('column', imgHolderClassName, styles.imageHolder)}>
          {img && <img {...img} />}
        </div>
        <div className="column is-three-fifths">
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
          <div className={`tags-list ${styles.tagsList}`}>
            {tags.map((tag) => (
              <Tag {...tag} key={tag.text} />
            ))}
          </div>
          {children}
        </div>
        {annotation}
      </div>
    </div>
  )
}
