import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1737809050574 implements MigrationInterface {
    name = 'Init1737809050574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "phone" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "phone"`);
    }

}
