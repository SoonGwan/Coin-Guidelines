import {
	Entity,
	Column,
	PrimaryColumn,
	BaseEntity,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity("cryptoCurrency")
export default class CryptoCurrency extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({
		length: 255,
		nullable: false,
	})
	name: string;

	@Column({
		length: 255,
		nullable: false,
	})
	symbol: string;

	@Column({
		length: 255,
		nullable: false,
	})
	slug: string;

	@Column({
		nullable: false,
	})
	rank: number;

	@Column({
		nullable: false,
	})
	is_active: number;

	@Column({
		length: 255,
		nullable: false,
	})
	first_historical_data: string;

	@Column({
		length: 255,
		nullable: false,
	})
	last_historical_data: string;
}
