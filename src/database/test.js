const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-27.222633",
    //     lng: "-49.6555874",
    //     name: "Lar dos Meninos",
    //     about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "31992227777",
    //     images: [
    //         "https://images.unsplash.com/photo-1591485112902-5b328dd94296?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
 
    //         "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horarios de visitas das 18hrs ate as 8hrs",
    //     open_on_weekends: "0"
    // })
    
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // // //consultar somente 1 orphanato, pelo id de
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    // //deletar dado da tabela do
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    

    // await db.run('UPDATE orphanges SET images "http://www.source.unsplash.com/random" WHERE id="2"')
}) 