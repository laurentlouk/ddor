import map from '../map'

export default async (moves) => {
  var position = { x: 0, y: 0 }

  const fileredList = moves.filter(
    (el) => el === 'n' || el === 's' || el === 'e' || el === 'w',
  )

  for (var i = 0; i < map.length; i++) {
    if (map[i].indexOf('F') >= 0) {
      position = { x: i, y: map[i].indexOf('F') }
    }
  }

  for (var i = 0; i < fileredList.length; i++) {
    if (fileredList[i] === 'n') {
      const nRes = await n(position)
      if (typeof nRes === 'string') {
        return nRes
      } else {
        position = nRes
      }
    }
    if (fileredList[i] === 's') {
      const nRes = await s(position)
      if (typeof nRes === 'string') {
        return nRes
      } else {
        position = nRes
      }
    }
    if (fileredList[i] === 'e') {
      const nRes = await e(position)
      if (typeof nRes === 'string') {
        return nRes
      } else {
        position = nRes
      }
    }
    if (fileredList[i] === 'w') {
      const nRes = await w(position)
      if (typeof nRes === 'string') {
        return nRes
      } else {
        position = nRes
      }
    }
  }

  return 'Nothing is found. 🤷‍♀️'
}

const n = async ({ x, y }) => {
  switch (map[x - 1][y]) {
    case 'O':
      return 'Orc found, Frodo is dead. ☠️'

    case 'D':
      return 'Ring is destroyed. 🎊'

    case undefined:
      return 'Falls out of the map. 😵'

    default:
      return { x: x - 1, y }
  }
}

const s = async ({ x, y }) => {
  switch (map[x + 1][y]) {
    case 'O':
      return 'Orc found, Frodo is dead. ☠️'

    case 'D':
      return 'Ring is destroyed. 🎊'

    case undefined:
      return 'Falls out of the map. 😵'

    default:
      return { x: x + 1, y }
  }
}

const e = async ({ x, y }) => {
  switch (map[x][y + 1]) {
    case 'O':
      return 'Orc found, Frodo is dead. ☠️'

    case 'D':
      return 'Ring is destroyed. 🎊'

    case undefined:
      return 'Falls out of the map. 😵'

    default:
      return { x, y: y + 1 }
  }
}

const w = async ({ x, y }) => {
  switch (map[x][y - 1]) {
    case 'O':
      return 'Orc found, Frodo is dead. ☠️'

    case 'D':
      return 'Ring is destroyed. 🎊'

    case undefined:
      return 'Falls out of the map. 😵'

    default:
      return { x, y: y - 1 }
  }
}
