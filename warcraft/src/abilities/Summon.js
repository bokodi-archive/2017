import Ability from "./Ability.js";

export default class Produce extends Ability {
    execute(entity, game, cell) {
        let manaCost = this.getInfo('manaCost', 0);

        if (entity.mana >= manaCost && this.isValidTarget(entity, game, cell)) {
            entity.costsMana(manaCost);

            game.insertEntity({
                race: entity.race,
                type: this.getInfo('summons'),
                cellX: cell.x,
                cellY: cell.y,
            });
        }
    }

    isValidTarget(entity, game, cell) {
        return (
            !game.find(cell)
            && game.isWalkable(cell)
            && this.getInfo('range', 1) >= game.entityDistance(entity, cell)
        );
    }
}
