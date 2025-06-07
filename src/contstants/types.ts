export type AnimalItem = {
  id: number
  url: string
  description: string
  category: string
  price: string
}

type DogImage = {
  id: string
  width: number
  height: number
  url: string
}

type DogWeightHeight = {
  imperial: string
  metric: string
}

export type Dog = {
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
  image: DogImage
  height: DogWeightHeight
  weight: DogWeightHeight
}
