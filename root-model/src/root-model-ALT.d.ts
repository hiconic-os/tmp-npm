/// <reference path="./root-model.types.d.ts" />

import * as gmCoreApi from "gm-core-api";

export declare namespace meta {
	const groupId: string;
	const artifactId: string;
	const version: string;
}

export import GenericEntity = gmCoreApi.GenericEntity;
export import StandardIdentifiable = gmCoreApi.StandardIdentifiable;
export import StandardIntegerIdentifiable = $T.com.braintribe.model.generic.StandardIntegerIdentifiable;
export import StandardStringIdentifiable = gmCoreApi.StandardStringIdentifiable;

declare namespace $T.com.braintribe.model.generic {

	const StandardIntegerIdentifiable: $tf.reflection.EntityType<StandardIntegerIdentifiable>;
	interface StandardIntegerIdentifiable extends GenericEntity {
	}

}

