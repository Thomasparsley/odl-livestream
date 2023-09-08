SELECT
    t.id::integer,
    sp.points,
    sp.season_id,
    tu.id::integer AS team_unit_id,
    tu.category,
    tu.group,
    t.id::integer AS team_id,
    t.name,
    t.slug,
    t.district,
    ARRAY_AGG(r.points) AS "allPoints",
    MIN(GREATEST(r.time_left, r.time_right)) AS best_time
FROM firesport_seasonpoints AS sp
INNER JOIN
    firesport_teamunit AS tu
    ON tu.id = sp.team_unit_id
INNER JOIN
    firesport_team AS t
    ON t.id = tu.team_id
INNER JOIN
    firesport_eventresult AS r
    ON r.team_unit_id = tu.id
    AND r.season_id = sp.season_id
    AND r.time_left != 0
    AND r.time_right != 0
WHERE sp.season_id = (
    SELECT s.year
    FROM firesport_season AS s
    ORDER BY s.year DESC
    LIMIT 1
)
GROUP BY
    t.id,
    sp.points,
    sp.season_id,
    tu.id,
    tu.category,
    tu.group,
    t.name,
    t.slug,
    t.district
ORDER BY t.id;
