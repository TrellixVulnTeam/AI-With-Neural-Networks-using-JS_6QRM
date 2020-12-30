const net = new brain.NeuralNetwork()

net.train([

    {
        input:[1,0],
        output:[0]
    },
    {
        input:[0,1],
        output:[1]
    },
])

const diagram= document.getElementById('diagram')
diagram.innerHTML = brain.utilitis.toSvg(net)