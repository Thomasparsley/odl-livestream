//
// Created on Sat Jul 01 2023
// Copyright (c) 2023 Tomáš Petržela (email@thomasparsley.cz)
//

export default defineEventHandler(async event => {
    const query = getQuery(event);
    const key = query.key as string;

    await useStorage().removeItem(key);
});