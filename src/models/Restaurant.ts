class Restaurant {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  grade: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    grade: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.grade = grade
  }
}

export default Restaurant
