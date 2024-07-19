/// <reference path="gm-core-api.static.d.ts" />
/// <reference path="gm-core-api.types.d.ts" />
/// <reference path="gm-core-api.jsinterop.d.ts" />

export declare namespace meta {
	const groupId: string;
	const artifactId: string;
	const version: string;
}

// THIS WOULD ONLY BE HERE IF WE WENT WITH root-model-ALT, i.e. having all in one file
export import GenericEntity = $T.com.braintribe.model.generic.GenericEntity;
export import StandardIdentifiable = $T.com.braintribe.model.generic.StandardIdentifiable;
export import StandardStringIdentifiable = $T.com.braintribe.model.generic.StandardStringIdentifiable;
