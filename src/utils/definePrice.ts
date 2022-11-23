let price: number

const DefineFlatPrice = (tipo: string, size: string): number => {
  if (tipo === 'Unitário' && size === 'P') {
    price = 155
  } else if (tipo === 'Duplo' && size === 'P') {
    price = 195
  } else if (tipo === 'Unitário' && size === 'M') {
    price = 220
  } else if (tipo === 'Duplo' && size === 'M') {
    price = 260
  } else if (tipo === 'Unitário' && size === 'G') {
    price = 275
  } else if (tipo === 'Duplo' && size === 'G') {
    price = 315
  } else if (tipo === 'Unitário' && size === 'GG') {
    price = 355
  } else if (tipo === 'Duplo' && size === 'GG') {
    price = 355
  } else if (tipo === 'Unitário' && size === 'XG') {
    price = 355
  } else if (tipo === 'Duplo' && size === 'XG') {
    price = 395
  }

  return price
}

const DefineCurvePrice = (tipo: string, size: string): number => {
  if (tipo === 'Unitário' && size === 'P') {
    price = 205
  } else if (tipo === 'Duplo' && size === 'P') {
    price = 245
  } else if (tipo === 'Unitário' && size === 'M') {
    price = 280
  } else if (tipo === 'Duplo' && size === 'M') {
    price = 320
  } else if (tipo === 'Unitário' && size === 'G') {
    price = 345
  } else if (tipo === 'Duplo' && size === 'G') {
    price = 385
  } else if (tipo === 'Unitário' && size === 'GG') {
    price = 385
  } else if (tipo === 'Duplo' && size === 'GG') {
    price = 425
  } else if (tipo === 'Unitário' && size === 'XG') {
    price = 445
  } else if (tipo === 'Duplo' && size === 'XG') {
    price = 485
  }

  return price
}

const DefineSumPriceCurve = (
  amount: string | number,
  size: string,
  personlization: string
): number => {
  if (typeof amount === 'number') {
    if (size === 'P' && personlization === 'nenhuma') {
      if (amount === 205) price = amount
    }

    // else if (size === 'P' && personlization !== 'nenhuma') {
    //   price = amount + 25
    // } else if (size === 'M' && personlization === 'nenhuma') {
    //   price = amount
    // } else if (size === 'M' && personlization !== 'nenhuma') {
    //   price = amount + 50
    // } else if (size === 'G' && personlization === 'nenhuma') {
    //   price = amount + 75
    // } else if (size === 'G' && personlization === 'nenhuma') {
    //   price = amount + 75
    // } else if (size === 'GG') {
    //   price = amount + 100
    // } else if (size === 'XG') {
    //   price = amount + 125
    // }
  }

  return price
}

export { DefineFlatPrice, DefineCurvePrice, DefineSumPriceCurve }
