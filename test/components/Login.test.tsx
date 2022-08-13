import { Login } from '../../src/components/Login';

describe('Login component test suite', ()=>{

beforeAll(()=>{
  console.log('before all')
})

beforeEach(()=>{
  console.log('before each')
})

afterAll(()=>{
  console.log('after all')
})

afterEach(()=>{
  console.log('after each')
})


  test('initial test', ()=>{
    expect(true).toBeTruthy();
  })
})