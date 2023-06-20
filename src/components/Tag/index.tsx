import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  marginBottom?: string
}

const Tag = ({ children, size = 'small', marginBottom }: Props) => (
  <TagContainer size={size} style={{ marginBottom }}>
    {children}
  </TagContainer>
)

export default Tag
