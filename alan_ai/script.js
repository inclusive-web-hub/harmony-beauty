intent(
  "What does this website do?",
  "What can I do here?",
  reply("This is an inclusive beauty ecommerce website.")
)

intent(
  "What is the name of this website?",
  "What is this website called?",
  reply("This website is called Harmony Beauty.")
)

let savedProducts = []

const confirmation = context(() => {
  intent("yes", async (p) => {
    for (let i = 0; i < savedProducts.length; i++) {
      p.play({ command: "highlight", product: savedProducts[i] })
      p.play(`${savedProducts[i].name}`)
    }
  })

  intent("no", (p) => {
    p.play("Sure, sounds good to me.")
  })
})

intent("Give me all products about $(source* (.*))", (p) => {
  let PRODUCTS_API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json"

  if (p.source.value) {
    PRODUCTS_API_URL = `${PRODUCTS_API_URL}?product_type=${p.source.value.toLowerCase()}`
  }

  api.request(PRODUCTS_API_URL, (error, response, body) => {
    const products = JSON.parse(body)

    if (!products.length) {
      p.play("Sorry, please try searching for different product categories")
      return
    }

    savedProducts = products.sort((a, b) => (a.price < b.price ? 1 : -1))
    p.play({ command: "allProducts", products })
    p.play(`Here are the (latest|recent) ${p.source.value}.`)

    p.play("Would you like me to read the names?")
    p.then(confirmation)
  })
})

const mapIndexes = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  sixth: 5,
  seventh: 6,
  eighth: 7,
  nineth: 8,
  last: 8,
}

const readDescription = context(() => {
  intent("yes", (p) => {
    if (savedProducts) {
      p.play(
        savedProducts[mapIndexes[p.source?.value.toLowerCase()]]?.description
      )
      p.play("Would you like to buy this product?")
      p.then(buyProduct)
    } else {
      p.play("Sorry, there are no products to choose from.")
    }
  })

  intent("no", (p) => {
    p.play("Sure, sounds good to me.")
    p.play("Would you like to buy this product?")
  })
})

const buyProduct = context(() => {
  intent("yes", (p) => {
    p.play({ command: "buy" })
  })

  intent("no", (p) => {
    p.play("Sure, sounds good to me.")
  })
})
intent("Click on the $(source* (.*)) product", (p) => {
  p.play({ command: "open", index: p.source.value.toLowerCase() })
  p.play("Would you like me to read the description?")
  p.then(readDescription)
})

intent("(go|) back", (p) => {
  p.play("Sure, going back")
  p.play({ command: "goBack" })
})
