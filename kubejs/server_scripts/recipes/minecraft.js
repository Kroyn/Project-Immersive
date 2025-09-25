ServerEvents.recipes(event => {
    // Ender Eye
    event.remove({ id:'minecraft:ender_eye'})

    event.shapeless(
    Item.of('minecraft:ender_eye'),
    [
        'minecraft:ender_pearl',
        'minecraft:blaze_rod',
        'minecraft:breeze_rod',
        'minecraft:echo_shard',
        'minecraft:prismarine_shard'
    ]
    )

    // Saddle
    event.shaped(
    Item.of('minecraft:saddle'),
    [
        ' L ',
        'LIL'
    ],
    {
        L: 'minecraft:leather',
        I: 'minecraft:iron_ingot'
    }
    )

    // Lead
    event.remove({ id:'minecraft:lead'})

    event.shaped(
    Item.of('minecraft:lead'),
    [
        'SS ',
        'SS ',
        '  S'
    ],
    {
        S: 'minecraft:string'
    }
    )
})
