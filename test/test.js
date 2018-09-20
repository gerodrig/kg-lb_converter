const expect = require('chai').expect;
const kgConverter = require('..').default;

describe('kg-lb', function() {

  it('prueba1', function () {
    const result = kgConverter(10);
    expect(result).to.equal('22.05')
  })

  it('prueba2', function () {
    const result = kgConverter(20);
    expect(result).to.equal('44.09')
  })
})