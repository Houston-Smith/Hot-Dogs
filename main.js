

const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4
  }
}

const htmlConverter = (computerObject) => {
    const computerHTMLSection =`
      <section id="computer--${computerObject.id}>
        <h1>${computerObject.manufacturer} ${computerObject.make}</h1>
        <div>Model: ${computerObject.model}</div>
        <div>Memory: ${computerObject.memory} GB</div>
        <div>Hard Drive Space: ${computerObject.hardDrive}</div>
        <div>Processor Speed: ${computerObject.processor} Ghz</div>
      </section>`
    
    return computerHTMLSection
}

const stringReturn = htmlConverter(computer)

console.log(stringReturn)

