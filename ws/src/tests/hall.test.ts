import Hall from '../models/hall'

describe('Hall model', () => {
 it('should create a hall', () => {
  const hall = new Hall({
    name: 'any_name',
    picture: 'any_picture',
    cover: 'any_cover',
    email: 'any_email@mail.com',
    password: 'any_password123',
    phone: '+55999999999',
    address: {
      city: 'any_city',
      uf: 'GO',
      cep: '123456789',
      number: '12345',
      country: 'Brasil'
    },
    geo: {
      type: 'any_type',
      coordinates: [123456789, 987654321]
    }
  })
 })

 it.todo('should get list of hall')
 it.todo('should get a hall')
 it.todo('should update a hall')
 it.todo('should delete a hall')
})
