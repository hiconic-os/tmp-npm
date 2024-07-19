/// <reference path="gm-core-api.d.ts" />

declare namespace $T.com.braintribe.gm.model.reason {

	const Reason: $tf.reflection.EntityType<Reason>;
	interface Reason extends $T.com.braintribe.model.generic.GenericEntity {
		reasons: list<Reason>;
		text: string;
	}

}

declare namespace $T.com.braintribe.model.generic {

	const GenericEntity: $tf.reflection.EntityType<GenericEntity>;
	interface GenericEntity extends $tf.reflection.EntityBase {
		globalId: string;
		id: any;
		partition: string;
	}

	const StandardIdentifiable: $tf.reflection.EntityType<StandardIdentifiable>;
	interface StandardIdentifiable extends GenericEntity {
	}

	const StandardStringIdentifiable: $tf.reflection.EntityType<StandardStringIdentifiable>;
	interface StandardStringIdentifiable extends GenericEntity {
	}

}

declare namespace $T.com.braintribe.model.generic.manipulation {

	const AtomicManipulation: $tf.reflection.EntityType<AtomicManipulation>;
	interface AtomicManipulation extends Manipulation {
	}

	const EntityProperty: $tf.reflection.EntityType<EntityProperty>;
	interface EntityProperty extends Owner {
		reference: $T.com.braintribe.model.generic.value.EntityReference;
	}

	const Manipulation: $tf.reflection.EntityType<Manipulation>;
	interface Manipulation extends $T.com.braintribe.model.generic.GenericEntity {
		inverseManipulation: Manipulation;
	}

	const Owner: $tf.reflection.EntityType<Owner>;
	interface Owner extends $T.com.braintribe.model.generic.GenericEntity {
		propertyName: string;
	}

}

declare namespace $T.com.braintribe.model.generic.mdec {

	const ModelDeclaration: $tf.reflection.EntityType<ModelDeclaration>;
	interface ModelDeclaration extends $T.com.braintribe.model.generic.GenericEntity {
		artifactId: string;
		dependencies: list<ModelDeclaration>;
		groupId: string;
		hash: string;
		modelGlobalId: string;
		name: string;
		types: set<string>;
		version: string;
	}

}

declare namespace $T.com.braintribe.model.generic.pr {

	const AbsenceInformation: $tf.reflection.EntityType<AbsenceInformation>;
	interface AbsenceInformation extends $T.com.braintribe.model.generic.value.ValueDescriptor {
		size: integer;
	}

}

declare namespace $T.com.braintribe.model.generic.pr.criteria {

	const BasicCriterion: $tf.reflection.EntityType<BasicCriterion>;
	interface BasicCriterion extends StackElementCriterion, TypedCriterion {
	}

	const StackElementCriterion: $tf.reflection.EntityType<StackElementCriterion>;
	interface StackElementCriterion extends TraversingCriterion {
	}

	const TraversingCriterion: $tf.reflection.EntityType<TraversingCriterion>;
	interface TraversingCriterion extends $T.com.braintribe.model.generic.GenericEntity {
	}

	const TypedCriterion: $tf.reflection.EntityType<TypedCriterion>;
	interface TypedCriterion extends $T.com.braintribe.model.generic.GenericEntity {
		typeSignature: string;
	}

}

declare namespace $T.com.braintribe.model.generic.value {

	const EntityReference: $tf.reflection.EntityType<EntityReference>;
	interface EntityReference extends $T.com.braintribe.model.generic.value.type.DynamicallyTypedDescriptor {
		refId: any;
		refPartition: string;
	}

	const EnumReference: $tf.reflection.EntityType<EnumReference>;
	interface EnumReference extends $T.com.braintribe.model.generic.value.type.DynamicallyTypedDescriptor {
		constant: string;
	}

	const ValueDescriptor: $tf.reflection.EntityType<ValueDescriptor>;
	interface ValueDescriptor extends $T.com.braintribe.model.generic.GenericEntity {
	}

}

declare namespace $T.com.braintribe.model.generic.value.type {

	const DynamicallyTypedDescriptor: $tf.reflection.EntityType<DynamicallyTypedDescriptor>;
	interface DynamicallyTypedDescriptor extends $T.com.braintribe.model.generic.value.ValueDescriptor {
		typeSignature: string;
	}

}

declare namespace $T.com.braintribe.model.resource {

	const CallStreamCapture: $tf.reflection.EntityType<CallStreamCapture>;
	interface CallStreamCapture extends $T.com.braintribe.model.generic.GenericEntity {
	}

	const Resource: $tf.reflection.EntityType<Resource>;
	interface Resource extends $T.com.braintribe.model.generic.StandardStringIdentifiable {
		created: date;
		creator: string;
		fileSize: long;
		md5: string;
		mimeType: string;
		name: string;
		resourceSource: $T.com.braintribe.model.resource.source.ResourceSource;
		specification: $T.com.braintribe.model.resource.specification.ResourceSpecification;
		tags: set<string>;
	}

}

declare namespace $T.com.braintribe.model.resource.source {

	const ResourceSource: $tf.reflection.EntityType<ResourceSource>;
	interface ResourceSource extends $T.com.braintribe.model.generic.StandardStringIdentifiable {
		useCase: string;
	}

	const TransientSource: $tf.reflection.EntityType<TransientSource>;
	interface TransientSource extends ResourceSource {
		owner: $T.com.braintribe.model.resource.Resource;
	}

}

declare namespace $T.com.braintribe.model.resource.specification {

	const ResourceSpecification: $tf.reflection.EntityType<ResourceSpecification>;
	interface ResourceSpecification extends $T.com.braintribe.model.generic.GenericEntity {
	}

}

