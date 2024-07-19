/// <reference path="gm-core-api.d.ts" />

declare namespace $tf.attr {

	// interface com.braintribe.common.attribute.AttributeAccessor
	abstract class AttributeAccessor<T> {
		static create<T, A extends TypeSafeAttribute<T>>(key: $tf.Class<A>): AttributeAccessor<T>;
	}
	interface AttributeAccessor<T> {
		find(attributes: TypeSafeAttributes): $tf.Optional<T>;
		findOrDefault(attributes: TypeSafeAttributes, defaultValue: T): T;
		findOrNull(attributes: TypeSafeAttributes): T;
		findOrSupply(attributes: TypeSafeAttributes, defaultValueSupplier: $tf.Supplier<T>): T;
		get(attributes: TypeSafeAttributes): T;
		set(attribution: TypeSafeAttribution, value: T): void;
	}

	// interface com.braintribe.common.attribute.AttributeContext
	interface AttributeContext extends ReflectedTypeSafeAttributes {
		derive(): AttributeContextBuilder;
		parent(): AttributeContext;
		transferAttributes(target: $tf.Map<$tf.Class<TypeSafeAttribute<any>>, any>): void;
	}

	// interface com.braintribe.common.attribute.AttributeContextBuilder
	interface AttributeContextBuilder extends TypeSafeAttribution {
		build(): AttributeContext;
		buildAnd(): any; // JS-WARN: com.braintribe.common.scoping.Scoping
		set<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, value: V): AttributeContextBuilder;
	}

	// interface com.braintribe.common.attribute.MutableTypeSafeAttributes
	interface MutableTypeSafeAttributes extends TypeSafeAttributes, TypeSafeAttribution {
	}

	// interface com.braintribe.common.attribute.ReflectedTypeSafeAttributes
	interface ReflectedTypeSafeAttributes extends TypeSafeAttributes {
		streamAttributes(): $tf.Stream<TypeSafeAttributeEntry>;
	}

	// interface com.braintribe.common.attribute.TypeSafeAttribute
	interface TypeSafeAttribute<T> {
	}

	// interface com.braintribe.common.attribute.TypeSafeAttributeEntry
	abstract class TypeSafeAttributeEntry {
		static of<V, A extends TypeSafeAttribute<V>>(attribute: $tf.Class<A>, value: V): TypeSafeAttributeEntry;
	}
	interface TypeSafeAttributeEntry {
		attribute<A extends TypeSafeAttribute<any>>(): $tf.Class<A>;
		value<V>(): V;
	}

	// interface com.braintribe.common.attribute.TypeSafeAttributes
	interface TypeSafeAttributes {
		findAttribute<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): $tf.Optional<V>;
		findOrDefault<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, defaultValue: V): V;
		findOrNull<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): V;
		findOrSupply<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, defaultValueSupplier: $tf.Supplier<V>): V;
		getAttribute<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): V;
	}

	// interface com.braintribe.common.attribute.TypeSafeAttribution
	interface TypeSafeAttribution {
		setAttribute<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, value: V): void;
	}

}

declare namespace $tf.util {

	// interface com.braintribe.common.lcd.function.CheckedBiConsumer
	interface CheckedBiConsumer<T, U, E extends $tf.Throwable> {
		accept(t: T, u: U): void;
		andThen(after: CheckedBiConsumer<T, U, E>): CheckedBiConsumer<T, U, E>;
	}

	// interface com.braintribe.common.lcd.function.CheckedBiFunction
	interface CheckedBiFunction<T, U, R, E extends $tf.Throwable> {
		apply(t: T, u: U): R;
	}

	// interface com.braintribe.common.lcd.function.CheckedConsumer
	interface CheckedConsumer<T, E extends $tf.Throwable> {
		accept(t: T): void;
		andThen(after: CheckedConsumer<T, E>): CheckedConsumer<T, E>;
	}

	// interface com.braintribe.common.lcd.function.CheckedFunction
	interface CheckedFunction<T, R, E extends $tf.Throwable> {
		apply(t: T): R;
	}

	// interface com.braintribe.common.lcd.function.CheckedPredicate
	interface CheckedPredicate<T, E extends $tf.Throwable> {
		and(other: CheckedPredicate<T, E>): CheckedPredicate<T, E>;
		negate(): CheckedPredicate<T, E>;
		or(other: CheckedPredicate<T, E>): CheckedPredicate<T, E>;
		test(t: T): boolean;
	}

	// interface com.braintribe.common.lcd.function.CheckedRunnable
	interface CheckedRunnable<E extends $tf.Throwable> {
		run(): void;
	}

	// interface com.braintribe.common.lcd.function.CheckedSupplier
	abstract class CheckedSupplier<T, E extends $tf.Throwable> {
		static uncheckedGet<T>(supplier: CheckedSupplier<T, any>): T;
	}
	interface CheckedSupplier<T, E extends $tf.Throwable> {
		get(): T;
		uncheckedGet(): T;
	}

	// interface com.braintribe.common.lcd.function.CheckedTriConsumer
	interface CheckedTriConsumer<T, U, V, E extends $tf.Throwable> {
		accept(t: T, u: U, v: V): void;
		andThen(after: CheckedTriConsumer<T, U, V, E>): CheckedTriConsumer<T, U, V, E>;
	}

	// interface com.braintribe.common.lcd.function.CheckedTriFunction
	interface CheckedTriFunction<T, U, V, R, E extends $tf.Throwable> {
		apply(t: T, u: U, v: V): R;
	}

	// interface com.braintribe.common.lcd.function.XBiConsumer
	interface XBiConsumer<T, U> extends CheckedBiConsumer<T, U, $tf.Exception> {
		andThen(after: CheckedBiConsumer<T, U, $tf.Exception>): XBiConsumer<T, U>;
	}

	// interface com.braintribe.common.lcd.function.XBiFunction
	interface XBiFunction<T, U, R> extends CheckedBiFunction<T, U, R, $tf.Exception> {
	}

	// interface com.braintribe.common.lcd.function.XConsumer
	interface XConsumer<T> extends CheckedConsumer<T, $tf.Exception> {
		andThen(after: CheckedConsumer<T, $tf.Exception>): XConsumer<T>;
	}

	// interface com.braintribe.common.lcd.function.XFunction
	interface XFunction<T, R> extends CheckedFunction<T, R, $tf.Exception> {
	}

	// interface com.braintribe.common.lcd.function.XPredicate
	interface XPredicate<T> extends CheckedPredicate<T, $tf.Exception> {
		and(other: CheckedPredicate<T, $tf.Exception>): XPredicate<T>;
		negate(): XPredicate<T>;
		or(other: CheckedPredicate<T, $tf.Exception>): XPredicate<T>;
	}

	// interface com.braintribe.common.lcd.function.XRunnable
	interface XRunnable extends CheckedRunnable<$tf.Exception> {
	}

	// interface com.braintribe.common.lcd.function.XSupplier
	interface XSupplier<T> extends CheckedSupplier<T, $tf.Exception> {
	}

	// interface com.braintribe.common.lcd.function.XTriConsumer
	interface XTriConsumer<T, U, V> extends CheckedTriConsumer<T, U, V, $tf.Exception> {
		andThen(after: CheckedTriConsumer<T, U, V, $tf.Exception>): XTriConsumer<T, U, V>;
	}

	// interface com.braintribe.common.lcd.function.XTriFunction
	interface XTriFunction<T, U, V, R> extends CheckedTriFunction<T, U, V, R, $tf.Exception> {
	}

	// class jsinterop.utils.Collections
	class Collections {
		constructor();
		static list<T>(...ts: T[]): $tf.List<T>;
		static set<T>(...ts: T[]): $tf.Set<T>;
	}

	// class jsinterop.utils.Lambdas
	class Lambdas {
		constructor();
		static toJBiConsumer<T, U>(jsLambda: (t: T, u: U) => void): $tf.BiConsumer<T, U>;
		static toJBiFunction<T, U, R>(jsLambda: (t: T, u: U) => R): $tf.BiFunction<T, U, R>;
		static toJBiPredicate<T, U>(jsLambda: (t: T, u: U) => boolean): any; // JS-WARN: java.util.function.BiPredicate
		static toJBinaryOperator<T>(jsLambda: (t: T, u: T) => T): $tf.BinaryOperator<T>;
		static toJConsumer<T>(jsLambda: (t: T) => void): $tf.Consumer<T>;
		static toJFunction<T, R>(jsLambda: (t: T) => R): $tf.Function<T, R>;
		static toJPredicate<T>(jsLambda: (t: T) => boolean): $tf.Predicate<T>;
		static toJSupplier<T>(jsLambda: () => T): $tf.Supplier<T>;
	}

}


//

declare namespace $tf.async {

	// interface com.braintribe.processing.async.api.AsyncCallback
	abstract class AsyncCallback<T> {
		static fromErrorHandler<T>(errorHandler: $tf.Consumer<$tf.Throwable>): AsyncCallback<T>;
		static of<T>(consumer: $tf.Consumer<T>, errorHandler: $tf.Consumer<$tf.Throwable>): AsyncCallback<T>;
		static ofConsumer<T>(consumer: $tf.Consumer<T>): AsyncCallback<T>;
	}
	interface AsyncCallback<T> {
		adapt<X>(adapter: $tf.Function<X, T>): AsyncCallback<X>;
		onFailure(t: $tf.Throwable): void;
		onSuccess(future: T): void;
	}

	// interface com.braintribe.processing.async.api.Promise
	interface Promise<T> extends $tf.Supplier<T> {
		get(): T;
		get(l: AsyncCallback<T>): void;
		getError(): $tf.Throwable;
		getState(): PromiseState;
		isCanceled(): boolean;
		isDone(): boolean;
		isFailed(): boolean;
		isOutstanding(): boolean;
		remove(l: AsyncCallback<T>): void;
		waitFor(): PromiseState;
	}

	// enum com.braintribe.processing.async.api.PromiseState
	interface PromiseState extends $tf.Comparable<PromiseState>{}
	class PromiseState {
		static outstanding: PromiseState;
		static canceled: PromiseState;
		static failed: PromiseState;
		static done: PromiseState;
	}

}



declare namespace $tf {

	// com.braintribe.model.generic.GMF#absenceInformation()
	function absenceInformation(): $T.com.braintribe.model.generic.pr.AbsenceInformation;
	// com.braintribe.model.generic.GMF#getLocale()
	function getLocale(): string;
	// com.braintribe.model.generic.GMF#getTypeReflection()
	function getTypeReflection<T extends $tf.reflection.GenericModelTypeReflection>(): T;
}

declare namespace $tf.eval {

	// interface com.braintribe.model.generic.eval.EvalContext
	interface EvalContext<R> extends $tf.attr.MutableTypeSafeAttributes, $tf.attr.ReflectedTypeSafeAttributes {
		executeAsync(): void;
		findAttribute<A extends $tf.attr.TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): $tf.Optional<V>;
		get(callback: $tf.async.AsyncCallback<R>): void;
		getAttribute<A extends $tf.attr.TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): V;
		getReasoned(callback: $tf.async.AsyncCallback<$tf.reason.Maybe<R>>): void;
		getReasonedSynchronous(): $tf.reason.Maybe<R>;
		getSynchronous(): R;
		setAttribute<A extends $tf.attr.TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, value: V): void;
		streamAttributes(): $tf.Stream<$tf.attr.TypeSafeAttributeEntry>;
	}

	// interface com.braintribe.model.generic.eval.EvalContextAspect
	interface EvalContextAspect<T> extends $tf.attr.TypeSafeAttribute<T> {
	}

	// interface com.braintribe.model.generic.eval.Evaluator
	interface Evaluator<D extends $T.com.braintribe.model.generic.GenericEntity> {
	}

	// interface com.braintribe.model.generic.eval.JsEvalContext
	interface JsEvalContext<R> extends EvalContext<R> {
		andGet(): globalThis.Promise<R>;
		andGetReasoned(): globalThis.Promise<$tf.reason.Maybe<R>>;
	}

}

declare namespace $tf.manipulation {

	// interface com.braintribe.model.generic.tracking.ManipulationListener
	interface ManipulationListener {
		onMan(manipulation: $T.com.braintribe.model.generic.manipulation.Manipulation): void;
	}

}

declare namespace $tf.metadata {

	// interface com.braintribe.model.meta.Weavable
	interface Weavable {
		deploy(): void;
		deployAsync(asyncCallack: $tf.async.AsyncCallback<$tf.Void>): void;
	}

}

declare namespace $tf.reason {

	// com.braintribe.gm.model.reason.Reasons#build(EntityType)
	function build<R extends $T.com.braintribe.gm.model.reason.Reason>(reasonType: $tf.reflection.EntityType<R>): ReasonBuilder<R>;
	// interface com.braintribe.gm.model.reason.ReasonBuilder
	interface ReasonBuilder<R extends $T.com.braintribe.gm.model.reason.Reason> {
		assign<T>(assigner: $tf.BiConsumer<R, T>, value: T): ReasonBuilder<R>;
		cause(reason: $T.com.braintribe.gm.model.reason.Reason): ReasonBuilder<R>;
		causes(...reasons: $T.com.braintribe.gm.model.reason.Reason[]): ReasonBuilder<R>;
		enrich(enricher: $tf.Consumer<R>): ReasonBuilder<R>;
		text(text: string): ReasonBuilder<R>;
		toIncompleteMaybe<T>(value: T): Maybe<T>;
		toMaybe<T>(): Maybe<T>;
		toReason(): R;
	}

	// class com.braintribe.gm.model.reason.Maybe
	interface Maybe<T> extends $tf.Supplier<T> {}
	class Maybe<T> {
		constructor();
		static complete<T>(value: T): Maybe<T>;
		static empty<T>(why: $T.com.braintribe.gm.model.reason.Reason): Maybe<T>;
		static incomplete<T>(value: T, why: $T.com.braintribe.gm.model.reason.Reason): Maybe<T>;
		cast<X>(): Maybe<X>;
		emptyCast<X>(): Maybe<X>;
		flatMap<R>(mapper: $tf.Function<T, Maybe<R>>): Maybe<R>;
		flatMapLenient<R>(mapper: $tf.util.XFunction<Maybe<T>, Maybe<R>>): Maybe<R>;
		get(): T;
		hasValue(): boolean;
		ifSatisfied(consumer: $tf.Consumer<T>): Maybe<T>;
		ifUnsatisfied(consumer: $tf.Consumer<$T.com.braintribe.gm.model.reason.Reason>): Maybe<T>;
		ifValue(consumer: $tf.Consumer<T>): Maybe<T>;
		isEmpty(): boolean;
		isIncomplete(): boolean;
		isSatisfied(): boolean;
		isUnsatisfied(): boolean;
		isUnsatisfiedAny(...reasonTypes: $tf.reflection.EntityType<$T.com.braintribe.gm.model.reason.Reason>[]): boolean;
		isUnsatisfiedBy(reasonType: $tf.reflection.EntityType<$T.com.braintribe.gm.model.reason.Reason>): boolean;
		map<R>(mapper: $tf.Function<T, R>): Maybe<R>;
		value(): T;
		whyUnsatisfied<R extends $T.com.braintribe.gm.model.reason.Reason>(): R;
	}

	// class com.braintribe.gm.model.reason.ReasonException
	class ReasonException extends $tf.RuntimeException {
		constructor(reason: $T.com.braintribe.gm.model.reason.Reason);
		getReason(): $T.com.braintribe.gm.model.reason.Reason;
	}

}

declare namespace $tf.reflection {

	// interface com.braintribe.model.generic.reflection.Attribute
	interface Attribute {
		getDeclaringType(): EntityType<any>;
		getDirect<T>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		getDirectUnsafe<T>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		getFirstDeclaringType(): EntityType<any>;
		getJavaType(): $tf.Class<any>;
		getName(): string;
		isNullable(): boolean;
		jGet<T>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		jSet(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): void;
		setDirect(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): any;
		setDirectUnsafe(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): void;
	}

	// interface com.braintribe.model.generic.reflection.BaseType
	abstract class BaseType {
		static INSTANCE: BaseType;
	}
	interface BaseType extends GenericModelType {
	}

	// interface com.braintribe.model.generic.reflection.BooleanType
	interface BooleanType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.CloningContext
	interface CloningContext extends TraversingContext {
		canTransferPropertyValue(entityType: EntityType<$T.com.braintribe.model.generic.GenericEntity>, property: Property, instanceToBeCloned: $T.com.braintribe.model.generic.GenericEntity, clonedInstance: $T.com.braintribe.model.generic.GenericEntity, sourceAbsenceInformation: $T.com.braintribe.model.generic.pr.AbsenceInformation): boolean;
		createAbsenceInformation(type: GenericModelType, instanceToBeCloned: $T.com.braintribe.model.generic.GenericEntity, property: Property): $T.com.braintribe.model.generic.pr.AbsenceInformation;
		getStrategyOnCriterionMatch(): StrategyOnCriterionMatch;
		postProcessCloneValue(propertyOrElementType: GenericModelType, clonedValue: any): any;
		preProcessInstanceToBeCloned(instanceToBeCloned: $T.com.braintribe.model.generic.GenericEntity): $T.com.braintribe.model.generic.GenericEntity;
		supplyRawClone(entityType: EntityType<$T.com.braintribe.model.generic.GenericEntity>, instanceToBeCloned: $T.com.braintribe.model.generic.GenericEntity): $T.com.braintribe.model.generic.GenericEntity;
	}

	// interface com.braintribe.model.generic.base.CollectionBase
	interface CollectionBase extends GenericBase {
		type(): CollectionType;
	}

	// interface com.braintribe.model.generic.reflection.CollectionType
	abstract class CollectionType {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface CollectionType extends EnhancableCustomType {
		getCollectionElementType(): GenericModelType;
		getCollectionKind(): CollectionType$CollectionKind;
		hasSimpleOrEnumContent(): boolean;
		isInstance(value: any): boolean;
	}

	// interface com.braintribe.model.generic.reflection.CustomType
	interface CustomType extends GenericModelType {
		getModel(): Model;
		getShortName(): string;
	}

	// interface com.braintribe.model.generic.reflection.DateType
	abstract class DateType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface DateType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.DecimalType
	abstract class DecimalType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface DecimalType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.DoubleType
	abstract class DoubleType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface DoubleType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.EnhancableCustomType
	interface EnhancableCustomType extends GenericModelType {
		create(): any;
		createPlain(): any;
	}

	// interface com.braintribe.model.generic.base.EntityBase
	abstract class EntityBase {
		static T: EntityType<$T.com.braintribe.model.generic.GenericEntity>;
	}
	interface EntityBase extends GenericBase {
		Attach(session: $tf.session.GmSession): void;
		Clone<T>(cloningContext: CloningContext): T;
		Detach(): $tf.session.GmSession;
		EntityType<T extends $T.com.braintribe.model.generic.GenericEntity>(): EntityType<T>;
		GlobalReference<T extends $T.com.braintribe.model.generic.value.EntityReference>(): T;
		HasTransientData(): boolean;
		IsEnhanced(): boolean;
		IsEntity(): boolean;
		IsVd(): boolean;
		Reference<T extends $T.com.braintribe.model.generic.value.EntityReference>(): T;
		RuntimeId(): $tf.Long;
		Session(): $tf.session.GmSession;
		Stringify(): string;
		ToSelectiveInformation(): string;
		ToString(): string;
		Traverse(traversingContext: TraversingContext): void;
		Type(): GenericModelType;
	}

	// interface com.braintribe.model.generic.reflection.EntityType
	interface EntityType<T extends $T.com.braintribe.model.generic.GenericEntity> extends CustomType, EnhancableCustomType {
		create(): T;
		createGlobalReference(entity: T, globalId: string): $T.com.braintribe.model.generic.value.EntityReference;
		createPlain(): T;
		createPlainRaw(): T;
		createRaw(): T;
		createReference(entity: T, idValue: any): $T.com.braintribe.model.generic.value.EntityReference;
		enhancedClass(): $tf.Class<T>;
		findProperty(name: string): Property;
		findTransientProperty(name: string): TransientProperty;
		getAttributes(): $tf.Stream<Attribute>;
		getCustomTypeProperties(): $tf.List<Property>;
		getDeclaredProperties(): $tf.List<Property>;
		getDeclaredTransientProperties(): $tf.List<TransientProperty>;
		getEffectiveEvaluatesTo(): GenericModelType;
		getEvaluatesTo(): GenericModelType;
		getIdProperty(): Property;
		getJavaType(): $tf.Class<T>;
		getProperties(): $tf.List<Property>;
		getProperty(name: string): Property;
		getSuperTypes(): $tf.List<EntityType<any>>;
		getTransientProperties(): $tf.List<TransientProperty>;
		getTransientProperty(name: string): TransientProperty;
		getTransitiveSuperTypes(includeSelf: boolean, distinct: boolean): $tf.Iterable<EntityType<any>>;
		hasExplicitSelectiveInformation(): boolean;
		initialize<E extends T>(entity: E): E;
		isAbstract(): boolean;
		isAssignableFrom(type: GenericModelType): boolean;
		plainClass(): $tf.Class<T>;
	}

	// interface com.braintribe.model.generic.base.EnumBase
	interface EnumBase extends GenericBase {
		name(): string;
		ordinal(): number;
		type(): EnumType;
	}

	// interface com.braintribe.model.generic.reflection.EnumType
	interface EnumType extends CustomType, ScalarType {
		findEnumValue(name: string): $tf.Enum<$tf.Enum<any>>;
		getEnumReference(enumConstant: $tf.Enum<any>): $T.com.braintribe.model.generic.value.EnumReference;
		getEnumValue(name: string): $tf.Enum<$tf.Enum<any>>;
		getEnumValues(): $tf.Enum<$tf.Enum<any>>[];
		getInstance<E extends $tf.Enum<E>>(value: string): E;
		getJavaType(): $tf.Class<$tf.Enum<any>>;
	}

	// interface com.braintribe.model.generic.reflection.FloatType
	abstract class FloatType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface FloatType extends SimpleType {
	}

	// interface com.braintribe.model.generic.base.GenericBase
	interface GenericBase {
		IsEntity(): boolean;
		Type(): GenericModelType;
	}

	// interface com.braintribe.model.generic.reflection.GenericModelType
	interface GenericModelType extends $tf.Comparable<GenericModelType> {
		areCustomInstancesReachable(): boolean;
		areEntitiesReachable(): boolean;
		cast<T extends GenericModelType>(): T;
		clone<T>(cloningContext: CloningContext, instance: any, strategy: StrategyOnCriterionMatch): T;
		compareTo(o: GenericModelType): number;
		getActualType(value: any): GenericModelType;
		getDefaultValue(): any;
		getJavaType(): $tf.Class<any>;
		getParameterization(): GenericModelType[];
		getSelectiveInformation(instance: any): string;
		getTypeCode(): TypeCode;
		getTypeName(): string;
		getTypeSignature(): string;
		getValueSnapshot(value: any): any;
		isAssignableFrom(type: GenericModelType): boolean;
		isBase(): boolean;
		isCollection(): boolean;
		isEmpty(value: any): boolean;
		isEntity(): boolean;
		isEnum(): boolean;
		isInstance(value: any): boolean;
		isNumber(): boolean;
		isScalar(): boolean;
		isSimple(): boolean;
		isValueAssignable(value: any): boolean;
		isVd(): boolean;
		traverse(traversingContext: TraversingContext, instance: any): void;
	}

	// interface com.braintribe.model.generic.reflection.GenericModelTypeReflection
	abstract class GenericModelTypeReflection {
		static rootModelName: string;
		static stSimpleTypes: $tf.List<SimpleType>;
		static TYPE_OBJECT: BaseType;
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface GenericModelTypeReflection extends EssentialTypes {
		deploy(weavable: $tf.metadata.Weavable, asyncCallback: $tf.async.AsyncCallback<$tf.Void>): void;
		findEntityType<T extends $T.com.braintribe.model.generic.GenericEntity>(typeSignature: string): EntityType<T>;
		findEnumType(typeSignature: string): EnumType;
		findModel(modelName: string): Model;
		findType<T extends GenericModelType>(typeSignature: string): T;
		getBaseType(): BaseType;
		getCollectionType<T extends CollectionType>(typeName: string, ...parameterization: GenericModelType[]): T;
		getEntityType<T extends $T.com.braintribe.model.generic.GenericEntity>(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): EntityType<T>;
		getEntityTypeBySignature<T extends $T.com.braintribe.model.generic.GenericEntity>(typeSignature: string): EntityType<T>;
		getEnumType(enumClass: $tf.Class<$tf.Enum<any>>): EnumType;
		getEnumTypeBySignature(typeName: string): EnumType;
		getEnumTypeOf(enumConstant: $tf.Enum<any>): EnumType;
		getItwClassLoader(): any;
		getListType(elementType: GenericModelType): ListType;
		getMapType(keyType: GenericModelType, valueType: GenericModelType): MapType;
		getModel(modelName: string): Model;
		getModelForType(customTypeSignature: string): Model;
		getPackagedModels(): $tf.Collection<Model>;
		getSetType(elementType: GenericModelType): SetType;
		getSimpleType(javaType: $tf.Class<any>): SimpleType;
		getType<T extends GenericModelType>(clazz: $tf.Class<any>): T;
		getTypeBySignature<T extends GenericModelType>(typeSignature: string): T;
		getTypeOf<T extends GenericModelType>(value: any): T;
	}

	// interface com.braintribe.model.generic.reflection.IntegerType
	abstract class IntegerType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface IntegerType extends SimpleType {
	}

	// interface com.braintribe.model.generic.collection.LinearCollectionBase
	interface LinearCollectionBase<E> extends $tf.Collection<E>, CollectionBase {
		type(): LinearCollectionType;
	}

	// interface com.braintribe.model.generic.reflection.LinearCollectionType
	abstract class LinearCollectionType {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface LinearCollectionType extends CollectionType {
		createPlain(): LinearCollectionBase<any>;
	}

	// interface com.braintribe.model.generic.collection.ListBase
	interface ListBase<E> extends $tf.List<E>, LinearCollectionBase<E> {
		type(): ListType;
	}

	// interface com.braintribe.model.generic.reflection.ListType
	abstract class ListType {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface ListType extends LinearCollectionType {
		createPlain(): ListBase<any>;
	}

	// interface com.braintribe.model.generic.reflection.LongType
	abstract class LongType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface LongType extends SimpleType {
	}

	// interface com.braintribe.model.generic.collection.MapBase
	interface MapBase<K, V> extends $tf.Map<K, V>, CollectionBase {
		type(): MapType;
	}

	// interface com.braintribe.model.generic.reflection.MapType
	abstract class MapType {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface MapType extends CollectionType {
		createPlain(): MapBase<any, any>;
		getKeyType(): GenericModelType;
		getValueType(): GenericModelType;
	}

	// interface com.braintribe.model.generic.reflection.Model
	abstract class Model {
		static modelGlobalId(modelName: string): string;
	}
	interface Model {
		getDeclaredJavaTypes(): $tf.Collection<$tf.Class<any>>;
		getDependencies(): $tf.Collection<Model>;
		getMetaModel<M extends $tf.metadata.Weavable>(): M;
		getModelArtifactDeclaration(): $T.com.braintribe.model.generic.mdec.ModelDeclaration;
		globalId(): string;
		isRootModel(): boolean;
		name(): string;
	}

	// interface com.braintribe.model.generic.reflection.Property
	interface Property extends Attribute {
		getAbsenceInformation(entity: $T.com.braintribe.model.generic.GenericEntity): $T.com.braintribe.model.generic.pr.AbsenceInformation;
		getDefaultRawValue(): any;
		getDefaultValue(): any;
		getInitializer(): any;
		getType(): GenericModelType;
		getVd<T extends $T.com.braintribe.model.generic.value.ValueDescriptor>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		getVdDirect<T extends $T.com.braintribe.model.generic.value.ValueDescriptor>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		isAbsent(entity: $T.com.braintribe.model.generic.GenericEntity): boolean;
		isConfidential(): boolean;
		isEmptyValue(value: any): boolean;
		isGlobalId(): boolean;
		isIdentifier(): boolean;
		isIdentifying(): boolean;
		isPartition(): boolean;
		setAbsenceInformation(entity: $T.com.braintribe.model.generic.GenericEntity, ai: $T.com.braintribe.model.generic.pr.AbsenceInformation): void;
		setDirect(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): any;
		setDirectUnsafe(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): void;
		setVd(entity: $T.com.braintribe.model.generic.GenericEntity, value: $T.com.braintribe.model.generic.value.ValueDescriptor): void;
		setVdDirect(entity: $T.com.braintribe.model.generic.GenericEntity, value: $T.com.braintribe.model.generic.value.ValueDescriptor): any;
	}

	// interface com.braintribe.model.generic.reflection.ScalarType
	interface ScalarType extends GenericModelType {
		instanceFromGmString(encodedValue: string): any;
		instanceFromString<T>(encodedValue: string): T;
		instanceToGmString(value: any): string;
		instanceToString(value: any): string;
	}

	// interface com.braintribe.model.generic.collection.SetBase
	interface SetBase<E> extends $tf.Set<E>, LinearCollectionBase<E> {
		type(): SetType;
	}

	// interface com.braintribe.model.generic.reflection.SetType
	abstract class SetType {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface SetType extends LinearCollectionType {
		createPlain(): SetBase<any>;
	}

	// interface com.braintribe.model.generic.reflection.SimpleType
	abstract class SimpleType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface SimpleType extends ScalarType {
		getPrimitiveJavaType(): $tf.Class<any>;
	}

	// interface com.braintribe.model.generic.reflection.StringType
	abstract class StringType {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface StringType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.TransientProperty
	interface TransientProperty extends Attribute {
		getType(): $tf.Class<any>;
	}

	// interface com.braintribe.model.generic.reflection.TraversingContext
	interface TraversingContext {
		getAssociated<T>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		getAssociatedObjects<T>(): $tf.Collection<T>;
		getCurrentCriterionType(): $tf.tc.CriterionType;
		getObjectStack(): $tf.Stack<any>;
		getTraversingStack(): $tf.Stack<$T.com.braintribe.model.generic.pr.criteria.BasicCriterion>;
		getVisitedObjects(): $tf.Collection<$T.com.braintribe.model.generic.GenericEntity>;
		isAbsenceResolvable(property: Property, entity: $T.com.braintribe.model.generic.GenericEntity, absenceInformation: $T.com.braintribe.model.generic.pr.AbsenceInformation): boolean;
		isPropertyValueUsedForMatching(type: EntityType<any>, entity: $T.com.braintribe.model.generic.GenericEntity, property: Property): boolean;
		isTraversionContextMatching(): boolean;
		isVisited(entity: $T.com.braintribe.model.generic.GenericEntity): boolean;
		popTraversingCriterion(): $T.com.braintribe.model.generic.pr.criteria.BasicCriterion;
		pushTraversingCriterion(criterion: $T.com.braintribe.model.generic.pr.criteria.BasicCriterion, object: any): void;
		registerAsVisited(entity: $T.com.braintribe.model.generic.GenericEntity, associate: any): void;
	}

	// interface com.braintribe.model.generic.reflection.Types
	abstract class Types {
		static TYPE_OBJECT: BaseType;
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
		static listOf(elementType: GenericModelType): ListType;
		static mapOf(keyType: GenericModelType, valueType: GenericModelType): MapType;
		static setOf(elementType: GenericModelType): SetType;
	}

	// enum com.braintribe.model.generic.reflection.CollectionType$CollectionKind
	interface CollectionType$CollectionKind extends $tf.Comparable<CollectionType$CollectionKind>{}
	class CollectionType$CollectionKind {
		static map: CollectionType$CollectionKind;
		static set: CollectionType$CollectionKind;
		static list: CollectionType$CollectionKind;
	}

	// enum com.braintribe.model.generic.value.EntityReferenceType
	interface EntityReferenceType extends $tf.Comparable<EntityReferenceType>{}
	class EntityReferenceType {
		static preliminary: EntityReferenceType;
		static persistent: EntityReferenceType;
		static global: EntityReferenceType;
	}

	// enum com.braintribe.model.generic.reflection.StrategyOnCriterionMatch
	interface StrategyOnCriterionMatch extends $tf.Comparable<StrategyOnCriterionMatch>{}
	class StrategyOnCriterionMatch {
		static partialize: StrategyOnCriterionMatch;
		static reference: StrategyOnCriterionMatch;
		static skip: StrategyOnCriterionMatch;
	}

	// enum com.braintribe.model.generic.reflection.TypeCode
	interface TypeCode extends $tf.Comparable<TypeCode>{}
	class TypeCode {
		static objectType: TypeCode;
		static entityType: TypeCode;
		static enumType: TypeCode;
		static setType: TypeCode;
		static listType: TypeCode;
		static mapType: TypeCode;
		static stringType: TypeCode;
		static booleanType: TypeCode;
		static integerType: TypeCode;
		static longType: TypeCode;
		static floatType: TypeCode;
		static doubleType: TypeCode;
		static decimalType: TypeCode;
		static dateType: TypeCode;
	}

	// class com.braintribe.model.generic.reflection.PropertyAccessInterceptor
	class PropertyAccessInterceptor {
		constructor();
		next: PropertyAccessInterceptor;
		getProperty(property: Property, entity: $T.com.braintribe.model.generic.GenericEntity, isVd: boolean): any;
		setProperty(property: Property, entity: $T.com.braintribe.model.generic.GenericEntity, value: any, isVd: boolean): any;
	}

}

declare namespace $tf.session {

	// interface com.braintribe.model.generic.session.GmSession
	interface GmSession extends $tf.manipulation.ManipulationListener {
		attach(entity: $T.com.braintribe.model.generic.GenericEntity): void;
		create<T extends $T.com.braintribe.model.generic.GenericEntity>(entityType: $tf.reflection.EntityType<T>): T;
		createRaw<T extends $T.com.braintribe.model.generic.GenericEntity>(entityType: $tf.reflection.EntityType<T>): T;
		deleteEntity(entity: $T.com.braintribe.model.generic.GenericEntity): void;
		getInterceptor(): $tf.reflection.PropertyAccessInterceptor;
	}

	// interface com.braintribe.model.generic.session.InputStreamProvider
	abstract class InputStreamProvider {
		static fromBytes(bytes: number[]): InputStreamProvider;
		static fromStringUtf8(s: string): InputStreamProvider;
	}
	interface InputStreamProvider {
		openInputStream(): $tf.InputStream;
	}

	// interface com.braintribe.model.generic.session.OutputStreamer
	interface OutputStreamer {
		writeTo(out: $tf.OutputStream): void;
	}

}

declare namespace $tf.tc {

	// enum com.braintribe.model.generic.pr.criteria.CriterionType
	interface CriterionType extends $tf.Comparable<CriterionType>{}
	class CriterionType {
		static BASIC: CriterionType;
		static MAP: CriterionType;
		static ROOT: CriterionType;
		static ENTITY: CriterionType;
		static PROPERTY: CriterionType;
		static LIST_ELEMENT: CriterionType;
		static SET_ELEMENT: CriterionType;
		static MAP_ENTRY: CriterionType;
		static MAP_KEY: CriterionType;
		static MAP_VALUE: CriterionType;
		static CONJUNCTION: CriterionType;
		static DISJUNCTION: CriterionType;
		static NEGATION: CriterionType;
		static JOKER: CriterionType;
		static VALUE_CONDITION: CriterionType;
		static TYPE_CONDITION: CriterionType;
		static RECURSION: CriterionType;
		static PROPERTY_TYPE: CriterionType;
		static PATTERN: CriterionType;
		static ACL: CriterionType;
		static PLACEHOLDER: CriterionType;
	}

}

declare namespace $tf.template {

	// interface com.braintribe.model.generic.template.Template
	abstract class Template {
		static parse(expression: string): Template;
	}
	interface Template {
		evaluate(placeholderResolver: $tf.Function<string, string>): string;
		expression(): string;
		fragments(): $tf.List<TemplateFragment>;
		isStaticOnly(): boolean;
	}

	// interface com.braintribe.model.generic.template.TemplateFragment
	interface TemplateFragment {
		getText(): string;
		isPlaceholder(): boolean;
	}

}

declare namespace $tf.util {

	// interface com.braintribe.model.processing.core.expert.api.DenotationMap
	interface DenotationMap<B extends $T.com.braintribe.model.generic.GenericEntity, V> {
		configurationSize(): number;
		entryStream(): $tf.Stream<$tf.Map$Entry<$tf.reflection.EntityType<B>, V>>;
		expertStream(): $tf.Stream<V>;
		find<T>(denotation: B): T;
		findByType<T>(denotationType: $tf.reflection.EntityType<B>): T;
		get<T>(denotation: B): T;
		getByType<T>(denotationType: $tf.reflection.EntityType<B>): T;
		isEmpty(): boolean;
	}

	// interface com.braintribe.model.processing.core.expert.api.DenotationMultiMap
	interface DenotationMultiMap<B extends $T.com.braintribe.model.generic.GenericEntity, V> extends DenotationMap<B, V> {
		findAll<T>(denotation: B): $tf.List<T>;
		findAllByType<T>(denotationType: $tf.reflection.EntityType<B>): $tf.List<T>;
	}

	// interface com.braintribe.model.processing.core.expert.api.MutableDenotationMap
	interface MutableDenotationMap<B extends $T.com.braintribe.model.generic.GenericEntity, V> extends DenotationMap<B, V> {
		put(denotationType: $tf.reflection.EntityType<B>, value: V): void;
		putAll(map: $tf.Map<$tf.reflection.EntityType<B>, V>): void;
		remove(denotationType: $tf.reflection.EntityType<B>): void;
	}

	// interface com.braintribe.model.processing.core.expert.api.MutableDenotationMultiMap
	interface MutableDenotationMultiMap<B extends $T.com.braintribe.model.generic.GenericEntity, V> extends DenotationMultiMap<B, V>, MutableDenotationMap<B, V> {
		removeEntry(denotationType: $tf.reflection.EntityType<B>, value: V): void;
	}

}

declare namespace $tf.reflection {

	// interface com.braintribe.model.generic.reflection.BooleanType
	interface BooleanType extends SimpleType {
	}

	// interface com.braintribe.model.generic.reflection.EssentialCollectionTypes
	abstract class EssentialCollectionTypes {
		static LIST: ListType;
		static SET: SetType;
		static MAP: MapType;
	}
	interface EssentialCollectionTypes {
	}

	// interface com.braintribe.model.generic.reflection.EssentialTypes
	abstract class EssentialTypes {
		static BASE: BaseType;
	}
	interface EssentialTypes extends SimpleTypes, EssentialCollectionTypes {
	}

	// interface com.braintribe.model.generic.reflection.SimpleType
	interface SimpleType extends ScalarType, SimpleTypes {
		getPrimitiveJavaType(): $tf.Class<any>;
	}

	// interface com.braintribe.model.generic.reflection.SimpleTypes
	abstract class SimpleTypes {
		static STRING: StringType;
		static FLOAT: FloatType;
		static DOUBLE: DoubleType;
		static BOOLEAN: BooleanType;
		static INTEGER: IntegerType;
		static LONG: LongType;
		static DATE: DateType;
		static DECIMAL: DecimalType;
	}
	interface SimpleTypes {
	}

}
