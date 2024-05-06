export const headerLinks = [
  {
    label: 'Acceuil',
    route: '/',
  },
  {
    label: 'Créer Service',
    route: '/events/create',
  },
  {
    label: 'Mon compte',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
