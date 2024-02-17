
export interface City {
    city: string
    point: string
}

const citiesMap: City[] = [
    { city: 'New York', point: '40.730610,-73.935242' },
    { city: 'Philadelphia', point: '39.952583,-75.165222' },
    { city: 'Atlanta', point: '33.753746,-84.386330' },
    { city: 'Washington DC', point: '38.889805,-77.009056' },
    { city: 'Baltimore', point: '39.264969,-76.598633' },
    { city: 'Boston', point: '42.364506,-71.038887' },
    { city: 'Miami', point: '25.761681,-80.191788' },
    { city: 'Chicago', point: '41.881832,-87.623177' },
    { city: 'Nashville', point: '36.174465,-86.767960' },
    { city: 'Dallas', point: '32.777963,-96.79622' },
    { city: 'Houston', point: '29.749907,-95.358421' },
    { city: 'Austin', point: '30.266666,-97.733330' },
    { city: 'Denver', point: '39.742043,-104.991531' },
    { city: 'New Orleans', point: '29.951065,-90.071533' },
    { city: 'Phoenix', point: '33.448376,-112.074036' },
    { city: 'Los Angeles', point: '34.052235,-118.243683' },
    { city: 'San Francisco', point: '37.773972,-122.431297' },
    { city: 'Portland, OR', point: '45.523064,-122.676483' },
    { city: 'Seattle', point: '47.608013,-122.335167' },
    { city: 'Honolulu', point: '21.315603,-157.858093' },
]

export default citiesMap;