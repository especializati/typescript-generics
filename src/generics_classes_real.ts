abstract class Entity<Props> {
  constructor(protected props: Props) {}

  toJSON(): Props {
    return {...this.props}
  }
}

type CategoryProperties = {name: string, description: string}
class Category extends Entity<CategoryProperties> {}

const category1 = new Category({
  name: 'string',
  description: 'string'
})
console.log(category1.toJSON())
// ****************
type ProductProperties = {title: string, price: number}
class Product extends Entity<ProductProperties> {}
const product1 = new Product({
  title: 'title',
  price: 12.2
})
console.log(product1.toJSON())
