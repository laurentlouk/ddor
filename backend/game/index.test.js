import game from '../game'

describe('game', () => {
  it("should return Nothing is found. 🤷‍♀️ if incounters only '-'", async () => {
    const res = await game(['e', 'n', 'w'])

    expect(res).toStrictEqual('Nothing is found. 🤷‍♀️')
  })

  it("should return Orc found, Frodo is dead. ☠️ if incounters one 'O'", async () => {
    const res = await game(['e', 'e', 'e', 'e', 'e'])

    expect(res).toStrictEqual('Orc found, Frodo is dead. ☠️')
  })

  it('should return Falls out of the map. 😵 if incounters an undefined value', async () => {
    const res = await game(['w', 'w'])

    expect(res).toStrictEqual('Falls out of the map. 😵')
  })

  it('should return Ring is destroyed. 🎊 if incounters one D', async () => {
    const res = await game([
      'e',
      'e',
      'n',
      'e',
      'e',
      'n',
      'e',
      'e',
      'n',
      'n',
      'e',
    ])

    expect(res).toStrictEqual('Ring is destroyed. 🎊')
  })
})
