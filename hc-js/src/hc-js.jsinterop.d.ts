/// <reference path="hc-js.d.ts" />

declare namespace $tf {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#list(String)
	function list(typeSignature: string): List<any>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#map(String, String)
	function map(keySignature: string, valueSignature: string): Map<any, any>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#set(String)
	function set(typeSignature: string): Set<any>;
	// class com.braintribe.gwt.browserfeatures.client.EntrySet
	class EntrySet<V> extends ViewSet<V, Map$Entry<string, V>> {
		constructor(map: any); // JS-WARN: com.braintribe.gwt.browserfeatures.client.JsStringMap
		protected project(key: string): Map$Entry<string, V>;
	}

	// class com.braintribe.gwt.browserfeatures.client.ViewSet
	interface ViewSet<V, P> extends Set<P>, Collection<P> {}
	class ViewSet<V, P> {
		constructor(map: any); // JS-WARN: com.braintribe.gwt.browserfeatures.client.JsStringMap
		iterator(): Iterator<P>;
		protected project(key: string): P;
		size(): number;
	}

	// class com.braintribe.model.generic.processing.pr.fluent.TC
	class tc {
		static containsTraversionCriterion(tc: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): boolean;
		static create(): $tf.tc.CriterionBuilder<tc>;
		done(): $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion;
	}

}

declare namespace $tf.attr {

	// com.braintribe.gwt.genericmodel.client.itw.RuntimeClassTools#createAttribute(String)
	function createAttribute<T>(name: string): AttributeAccessor<T>;
	// interface com.braintribe.utils.collection.impl.AttributeContexts
	abstract class AttributeContexts {
		static emptyContext: AttributeContext;
		static stack: any;
		static attributeContext(): AttributeContextBuilder;
		static derivePeek(): AttributeContextBuilder;
		static empty(): AttributeContext;
		static peek(): AttributeContext;
		static pop(): AttributeContext;
		static push(context: AttributeContext): void;
	}
	interface AttributeContexts {
	}

	// class com.braintribe.utils.collection.impl.MapAttributeContext
	interface MapAttributeContext extends AttributeContext, TypeSafeAttribution, $tf.Map<$tf.Class<TypeSafeAttribute<any>>, any> {}
	class MapAttributeContext {
		constructor(parent: AttributeContext);
		asMap(): $tf.Map<$tf.Class<TypeSafeAttribute<any>>, any>;
		protected checkMutability(): void;
		derive(): AttributeContextBuilder;
		entrySet(): $tf.Set<$tf.Map$Entry<$tf.Class<TypeSafeAttribute<any>>, any>>;
		findAttribute<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>): $tf.Optional<V>;
		parent(): AttributeContext;
		seal(): void;
		setAttribute<A extends TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, value: V): void;
		streamAttributes(): $tf.Stream<TypeSafeAttributeEntry>;
		toString(): string;
		transferAttributes(target: $tf.Map<$tf.Class<TypeSafeAttribute<any>>, any>): void;
	}

}

declare namespace $tf.error {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#createError(Throwable)
	function createError(t: $tf.Throwable): $tf.util.TfJsError;
}

declare namespace $tf.eval {

	// interface com.braintribe.model.processing.service.api.ParentAttributeContextAspect
	abstract class ParentAttributeContextAspect {
		static $: $tf.attr.AttributeAccessor<$tf.attr.AttributeContext>;
	}
	interface ParentAttributeContextAspect extends EvalContextAspect<$tf.attr.AttributeContext> {
	}

	// interface com.braintribe.gwt.gmrpc.api.client.user.RequestUploadProgress
	interface RequestUploadProgress {
		getErrorMessage(): string;
		getLengthComputable(): boolean;
		getLoaded(): number;
		getTotal(): number;
	}

	// interface com.braintribe.gwt.gmrpc.api.client.user.RequestUploadProgressMonitor
	abstract class RequestUploadProgressMonitor {
		static ATTRIBUTE: $tf.Class<RequestUploadProgressMonitor>;
	}
	interface RequestUploadProgressMonitor extends EvalContextAspect<RequestUploadProgressMonitor> {
		installOn(context: EvalContext<any>): void;
		onProgress(progress: RequestUploadProgress): void;
	}

	// class com.braintribe.gwt.gmrpc.api.client.user.AbstractRequestProgressUploadMonitor
	interface AbstractRequestProgressUploadMonitor extends RequestUploadProgressMonitor {}
	class AbstractRequestProgressUploadMonitor {
		constructor();
		static ATTRIBUTE: $tf.Class<RequestUploadProgressMonitor>;
	}

	// class com.braintribe.gwt.tribefirejs.client.extensions.EmptyEvalContext
	interface EmptyEvalContext<R> extends EvalContext<R> {}
	class EmptyEvalContext<R> {
		constructor();
	}

	// class com.braintribe.gwt.tribefirejs.client.extensions.EmptyEvaluator
	interface EmptyEvaluator<E extends $T.com.braintribe.model.generic.GenericEntity> extends Evaluator<E> {}
	class EmptyEvaluator<E extends $T.com.braintribe.model.generic.GenericEntity> {
		constructor();
	}

}

declare namespace $tf.i18n {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#defaultLocale(Object[])
	function defaultLocale(...params: any[]): any;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#getDefaultLocale(LocalizedString)

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#getLocale()
	function getLocale(): string;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#locale(Object[])
	function locale(...params: any[]): any;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#putDefaultLocale(LocalizedString, String)

}

declare namespace $tf.manipulation {

	// interface com.braintribe.model.processing.session.api.notifying.EntityManipulationListenerRegistry
	interface EntityManipulationListenerRegistry extends ManipulationListenerRegistry {
		property(propertyName: $tf.reflection.Property): ManipulationListenerRegistry;
		propertyName(propertyName: string): ManipulationListenerRegistry;
	}

	// interface com.braintribe.model.processing.session.api.notifying.GenericManipulationListenerRegistry
	interface GenericManipulationListenerRegistry extends ManipulationListenerRegistry {
		asCore(isCore: boolean): ManipulationListenerRegistry;
		entity(entity: $T.com.braintribe.model.generic.GenericEntity): EntityManipulationListenerRegistry;
		entityProperty(entity: $T.com.braintribe.model.generic.GenericEntity, property: string): ManipulationListenerRegistry;
	}

	// interface com.braintribe.model.generic.manipulation.util.HistorySuspension
	interface HistorySuspension {
		resumeHistory(): void;
		suspendHistory(): void;
	}

	// interface com.braintribe.model.processing.session.api.notifying.ManipulationListenerRegistry
	interface ManipulationListenerRegistry {
		add(listener: ManipulationListener): void;
		addFirst(listener: ManipulationListener): void;
		remove(listener: ManipulationListener): void;
	}

	// interface com.braintribe.gwt.tribefirejs.client.manipulation.ManipulationSerialization
	abstract class ManipulationSerialization {
		static deserializeManipulation(s: string): globalThis.Promise<$T.com.braintribe.model.generic.manipulation.Manipulation>;
		static serializeManipulation(manipulation: $T.com.braintribe.model.generic.manipulation.Manipulation, local: boolean): globalThis.Promise<string>;
		static serializeManipulationList(manipulations: $tf.List<$T.com.braintribe.model.generic.manipulation.Manipulation>, local: boolean): globalThis.Promise<string>;
		static serializeManipulations(manipulations: any, local: boolean): globalThis.Promise<string>; // JS-WARN: com.braintribe.gwt.browserfeatures.client.JsArray
	}
	interface ManipulationSerialization {
	}

	// interface com.braintribe.model.processing.session.api.persistence.PersistenceManipulationListenerRegistry
	interface PersistenceManipulationListenerRegistry extends GenericManipulationListenerRegistry {
		addCommitListener(listener: $tf.session.CommitListener): void;
		addQueryResultMergeListener(listener: $tf.session.QueryResultMergeListener): void;
		removeCommitListener(listener: $tf.session.CommitListener): void;
		removeQueryResultMergeListener(listener: $tf.session.QueryResultMergeListener): void;
	}

}

declare namespace $tf.math {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#bigDecimal(double)
	function bigDecimal(val: number): $T.Decimal;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#bigDecimal(String)
	function bigDecimalFromString(val: string): $T.Decimal;
}

declare namespace $tf.meta {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#modelResolver(GmMetaModel)

}

declare namespace $tf.metadata {

	// interface com.braintribe.model.processing.meta.cmd.CmdResolver
	interface CmdResolver {
		getIdType<T extends $tf.reflection.ScalarType>(typeSignature: string): T;
		getMdSelectorResolver(): any;
		getMetaData(): ModelMdResolver;
		getModelOracle(): $tf.model.ModelOracle;
	}

	// interface com.braintribe.model.processing.meta.cmd.builders.ConstantMdResolver
	interface ConstantMdResolver extends MdResolver<ConstantMdResolver> {


	}

	// interface com.braintribe.model.processing.meta.cmd.result.ConstantMdResult


	// interface com.braintribe.model.processing.meta.cmd.builders.EntityMdResolver
	interface EntityMdResolver extends EntityRelatedMdResolver<EntityMdResolver> {


		property(property: $tf.reflection.Property): PropertyMdResolver;

		propertyName(propertyName: string): PropertyMdResolver;
	}

	// interface com.braintribe.model.processing.meta.cmd.result.EntityMdResult


	// interface com.braintribe.model.processing.meta.cmd.builders.EntityRelatedMdResolver
	interface EntityRelatedMdResolver<B extends EntityRelatedMdResolver<B>> extends MdResolver<B> {
		entity(genericEntity: $T.com.braintribe.model.generic.GenericEntity): B;

		preliminary(isPreliminary: boolean): B;
	}

	// interface com.braintribe.model.processing.meta.editor.EntityTypeMetaDataEditor
	interface EntityTypeMetaDataEditor {
	}

	// interface com.braintribe.model.processing.meta.cmd.builders.EnumMdResolver
	interface EnumMdResolver extends MdResolver<EnumMdResolver> {


	}

	// interface com.braintribe.model.processing.meta.cmd.result.EnumMdResult


	// interface com.braintribe.model.processing.meta.editor.EnumTypeMetaDataEditor
	interface EnumTypeMetaDataEditor {

	}

	// interface com.braintribe.model.processing.meta.cmd.builders.MdResolver
	interface MdResolver<B extends MdResolver<B>> {
		access(externalId: string): B;

		fork(): B;
		ignoreSelectors(): B;

		lenient(lenient: boolean): B;

		useCase(useCase: string): B;
		useCaseSet(useCases: $tf.Set<string>): B;
		useCases(...useCases: string[]): B;
		withAspectEntry<T, A>(entry: AspectEntry<T, A>): B; // JS-WARN: com.braintribe.model.processing.meta.cmd.context.SelectorContextAspect
	}

	// interface com.braintribe.model.processing.meta.cmd.result.MdResult
	
	// interface com.braintribe.model.processing.meta.cmd.MdSelectorResolver


	
	// interface com.braintribe.model.processing.meta.cmd.builders.ModelMdResolver
	interface ModelMdResolver extends MdResolver<ModelMdResolver> {

		enumClass(entityClass: $tf.Class<$tf.Enum<any>>): EnumMdResolver;
		enumType(enumType: $tf.reflection.EnumType<any>): EnumMdResolver;
		enumTypeSignature(typeSignature: string): EnumMdResolver;



		property(property: $tf.reflection.Property): PropertyMdResolver;

	}

	// interface com.braintribe.model.processing.meta.cmd.result.ModelMdResult


	// interface com.braintribe.model.processing.meta.editor.ModelMetaDataEditor
	interface ModelMetaDataEditor {








		onEntityType(entityType: $tf.reflection.EntityType<any>): EntityTypeMetaDataEditor;

		onEntityTypeViaTypeSignature(typeSignature: string): EntityTypeMetaDataEditor;
		onEnumType(enumType: $tf.reflection.EnumType<any>): EnumTypeMetaDataEditor;
		onEnumTypeViaClass(enumClass: $tf.Class<$tf.Enum<any>>): EnumTypeMetaDataEditor;

		onEnumTypeViaTypeSignature(typeSignature: string): EnumTypeMetaDataEditor;



	}

	// interface com.braintribe.model.processing.meta.cmd.builders.PropertyMdResolver
	interface PropertyMdResolver extends EntityRelatedMdResolver<PropertyMdResolver> {


	}

	// interface com.braintribe.model.processing.meta.cmd.result.PropertyMdResult


	// interface com.braintribe.model.processing.meta.cmd.context.SelectorContext
	interface SelectorContext {
		get<T, A>(aspect: $tf.Class<A>): T; // JS-WARN: com.braintribe.model.processing.meta.cmd.context.SelectorContextAspect
		getModelOracle(): $tf.model.ModelOracle;
		getNotNull<T, A>(aspect: $tf.Class<A>): T; // JS-WARN: com.braintribe.model.processing.meta.cmd.context.SelectorContextAspect
	}

	// interface com.braintribe.model.processing.meta.cmd.context.experts.SelectorExpert


	// class com.braintribe.model.processing.meta.cmd.builders.AspectEntry
	class AspectEntry<T, A> {
		constructor(aspect: $tf.Class<A>, value: T); // JS-WARN: com.braintribe.model.processing.meta.cmd.context.SelectorContextAspect
		getAspect(): $tf.Class<A>;
		getValue(): T;
		setAspect(aspect: $tf.Class<A>): void;
		setValue(value: T): void;
	}

}

declare namespace $tf.model {

	// interface com.braintribe.model.processing.meta.oracle.EntityTypeOracle
	interface EntityTypeOracle extends TypeOracle {

		findProperty(propertyName: string): PropertyOracle;

		findPropertyViaProperty(property: $tf.reflection.Property): PropertyOracle;


		getProperties(): EntityTypeProperties;
		getProperty(propertyName: string): PropertyOracle;


		getPropertyViaProperty(property: $tf.reflection.Property): PropertyOracle;
		getQualifiedPropertyMetaData(): $tf.Stream<QualifiedMetaData>;
		getSubTypes(): TypeHierarchy;
		getSuperTypes(): TypeHierarchy;
		hasProperty(propertyName: string): boolean;
		isEvaluable(): boolean;
	}

	// interface com.braintribe.model.processing.meta.oracle.EntityTypeProperties
	interface EntityTypeProperties {

		asProperties(): $tf.Stream<$tf.reflection.Property>;
		asPropertyOracles(): $tf.Stream<PropertyOracle>;

		onlyDeclared(): EntityTypeProperties;
		onlyInherited(): EntityTypeProperties;
	}

	// interface com.braintribe.model.processing.meta.oracle.EnumConstantOracle
	interface EnumConstantOracle {
		asEnum(): $tf.Enum<any>;

		getEnumTypeOracle(): EnumTypeOracle;


		getQualifiedMetaData(): $tf.Stream<QualifiedMetaData>;
	}

	// interface com.braintribe.model.processing.meta.oracle.EnumTypeConstants
	interface EnumTypeConstants {
		asEnumConstantOracles(): $tf.Stream<EnumConstantOracle>;
		asEnums(): $tf.Stream<$tf.Enum<any>>;


	}

	// interface com.braintribe.model.processing.meta.oracle.EnumTypeOracle
	interface EnumTypeOracle extends TypeOracle {

		findConstant(constantName: string): EnumConstantOracle;
		findConstantViaEnumConstant(enumValue: $tf.Enum<any>): EnumConstantOracle;

		getConstant(constantName: string): EnumConstantOracle;

		getConstantViaEnumConstant(enumValue: $tf.Enum<any>): EnumConstantOracle;

		getConstants(): EnumTypeConstants;

		getQualifiedConstantMetaData(): $tf.Stream<QualifiedMetaData>;
	}

	// interface com.braintribe.gwt.tribefirejs.client.remote.ModelAccessoryBuilder
	interface ModelAccessoryBuilder {
		access(accessId: string, accessDenotationType: string): ModelAccessoryBuilder;
		accessDescriptor(accessDescriptor: $tf.session.AccessDescriptor): ModelAccessoryBuilder;
		build(): $tf.session.ModelAccessory;
		useCase(useCase: string): ModelAccessoryBuilder;
		useCases(useCases: $tf.Set<string>): ModelAccessoryBuilder;
	}

	// interface com.braintribe.model.processing.meta.oracle.ModelDependencies
	interface ModelDependencies {

		asModelOracles(): $tf.Stream<ModelOracle>;
		asModels(): $tf.Stream<$tf.reflection.Model>;
		includeSelf(): ModelDependencies;
		transitive(): ModelDependencies;
	}

	// interface com.braintribe.model.processing.meta.oracle.ModelOracle
	interface ModelOracle {
		findEntityTypeOracle(typeSignature: string): EntityTypeOracle;
		findEntityTypeOracleViaEntityType(type: $tf.reflection.EntityType<any>): EntityTypeOracle;

		findEnumTypeOracle(typeSignature: string): EnumTypeOracle;
		findEnumTypeOracleViaEnumClass(enumClass: $tf.Class<$tf.Enum<any>>): EnumTypeOracle;
		findEnumTypeOracleViaEnumType(type: $tf.reflection.EnumType<any>): EnumTypeOracle;




		findTypeOracle<T extends TypeOracle>(customTypeSignature: string): T;
		findTypeOracleViaCustomType<T extends TypeOracle>(type: $tf.reflection.CustomType): T;

		getDependencies(): ModelDependencies;
		getEntityTypeOracle(typeSignature: string): EntityTypeOracle;
		getEntityTypeOracleViaEntityType(type: $tf.reflection.EntityType<any>): EntityTypeOracle;



		getEnumTypeOracle(typeSignature: string): EnumTypeOracle;
		getEnumTypeOracleViaEnumClass(enumClass: $tf.Class<$tf.Enum<any>>): EnumTypeOracle;
		getEnumTypeOracleViaEnumType(type: $tf.reflection.EnumType<any>): EnumTypeOracle;













		getQualifiedEnumConstantMetaData(): $tf.Stream<QualifiedMetaData>;
		getQualifiedEnumMetaData(): $tf.Stream<QualifiedMetaData>;
		getQualifiedMetaData(): $tf.Stream<QualifiedMetaData>;
		getTypeOracle<T extends TypeOracle>(customTypeSignature: string): T;
		getTypeOracleViaCustomType<T extends TypeOracle>(type: $tf.reflection.CustomType): T;

		getTypes(): ModelTypes;
	}

	// interface com.braintribe.model.processing.meta.oracle.ModelTypes
	interface ModelTypes {

		asTypeOracles<T extends TypeOracle>(): $tf.Stream<T>;
		asTypes<T extends $tf.reflection.CustomType>(): $tf.Stream<T>;

		onlyDeclared(): ModelTypes;
		onlyEntities(): ModelTypes;
		onlyEnums(): ModelTypes;
		onlyInherited(): ModelTypes;
	}

	// interface com.braintribe.model.processing.meta.oracle.PropertyOracle
	interface PropertyOracle {

		asProperty(): $tf.reflection.Property;
		getEntityTypeOracle(): EntityTypeOracle;

		getInitializer(): any;

		getName(): string;
		getQualifiedMetaData(): $tf.Stream<QualifiedMetaData>;
	}

	// interface com.braintribe.model.processing.meta.oracle.QualifiedMetaData
	interface QualifiedMetaData {


	}

	// interface com.braintribe.gwt.tribefirejs.client.remote.SessionFactoryBuilder
	interface SessionFactoryBuilder {
		build(): $tf.Supplier<$tf.session.PersistenceGmSession>;
		modelAccessory(modelAccessory: $tf.session.ModelAccessory): SessionFactoryBuilder;
	}

	// interface com.braintribe.model.processing.meta.oracle.TypeHierarchy
	interface TypeHierarchy {
		asEntityTypeOracles(): $tf.Set<EntityTypeOracle>;

		asTypes<T extends $tf.reflection.GenericModelType>(): $tf.Set<T>;
		includeBaseType(): TypeHierarchy;
		includeSelf(): TypeHierarchy;
		includeSelfForce(): TypeHierarchy;
		onlyAbstract(): TypeHierarchy;
		onlyInstantiable(): TypeHierarchy;
		sorted(order: any): TypeHierarchy; // JS-WARN: com.braintribe.model.processing.meta.oracle.TypeHierarchy$Order
		transitive(): TypeHierarchy;
	}

	// interface com.braintribe.model.processing.meta.oracle.TypeOracle
	interface TypeOracle {

		asType<T extends $tf.reflection.CustomType>(): T;

		getModelOracle(): ModelOracle;
		getQualifiedMetaData(): $tf.Stream<QualifiedMetaData>;
		isDeclared(): boolean;
	}

}

declare namespace $tf.modelpath {

	// enum com.braintribe.model.generic.path.api.ModelPathElementType
	interface ModelPathElementType extends $tf.Comparable<ModelPathElementType>{}
	class ModelPathElementType {
		static EntryPoint: ModelPathElementType;
		static ListItem: ModelPathElementType;
		static MapKey: ModelPathElementType;
		static MapValue: ModelPathElementType;
		static Property: ModelPathElementType;
		static Root: ModelPathElementType;
		static SetItem: ModelPathElementType;
	}

	// class com.braintribe.model.generic.path.EntryPointPathElement
	class EntryPointPathElement extends ModelPathElement {
		constructor(type: $tf.reflection.GenericModelType, value: any);
		copy(): EntryPointPathElement;
		getElementType(): ModelPathElementType;
	}

	// class com.braintribe.model.generic.path.ListItemPathElement
	class ListItemPathElement extends ModelPathElement {
		constructor(entity: $T.com.braintribe.model.generic.GenericEntity, property: $tf.reflection.Property, index: number, type: $tf.reflection.GenericModelType, value: any);
		copy(): ListItemPathElement;
		getElementType(): ModelPathElementType;
		getIndex(): number;
	}

	// class com.braintribe.model.generic.path.MapKeyPathElement
	class MapKeyPathElement extends ModelPathElement {
		constructor(entity: $T.com.braintribe.model.generic.GenericEntity, property: $tf.reflection.Property, keyType: $tf.reflection.GenericModelType, key: any, type: $tf.reflection.GenericModelType, value: any);
		copy(): MapKeyPathElement;
		getElementType(): ModelPathElementType;
		getKey<T>(): T;
		getKeyType<T extends $tf.reflection.GenericModelType>(): T;
		getMapEntry<K, V>(): $tf.Map$Entry<K, V>;
		getMapValue<T>(): T;
		getMapValueType<T extends $tf.reflection.GenericModelType>(): T;

	}

	// class com.braintribe.model.generic.path.MapValuePathElement
	class MapValuePathElement extends ModelPathElement {
		constructor(entity: $T.com.braintribe.model.generic.GenericEntity, property: $tf.reflection.Property, keyType: $tf.reflection.GenericModelType, key: any, type: $tf.reflection.GenericModelType, value: any, keyElement: MapKeyPathElement);
		copy(): MapValuePathElement;
		getElementType(): ModelPathElementType;
		getKey<T>(): T;
		getKeyElement(): MapKeyPathElement;
		getKeyType<T extends $tf.reflection.GenericModelType>(): T;
		getMapEntry<K, V>(): $tf.Map$Entry<K, V>;
		getMapValue<T>(): T;
		getMapValueType<T extends $tf.reflection.GenericModelType>(): T;

	}

	// class com.braintribe.model.generic.path.ModelPath
	interface ModelPath extends $tf.List<ModelPathElement>, $tf.Collection<ModelPathElement> {}
	class ModelPath {
		constructor();
		static MODEL_PATH_NAMESPACE: string;
		addAll(c: $tf.Collection<ModelPathElement>): boolean;
		addElement(element: ModelPathElement): boolean;
		addIndex(index: number, element: ModelPathElement): void;
		asTraversingContext(): $tf.reflection.TraversingContext;
		asTraversingCriterionStack(): $tf.Stack<$T.com.braintribe.model.generic.pr.criteria.BasicCriterion>;
		copy(): ModelPath;
		protected createAnchor(): ModelPathNode;
		first(): ModelPathElement;
		protected getAnchor(): ModelPathNode;
		iteratorAtEnd(): $tf.ListIterator<ModelPathElement>;
		last(): ModelPathElement;
		protected listIterator(node: ModelPathNode): $tf.ListIterator<ModelPathElement>;
		listIteratorIndex(index: number): $tf.ListIterator<ModelPathElement>;
		remove(o: any): boolean;
		removeIndex(index: number): ModelPathElement;
		size(): number;
	}

	// class com.braintribe.model.generic.path.ModelPathElement
	interface ModelPathElement extends $tf.Iterable<ModelPathElement> {}
	class ModelPathElement {
		constructor(type: $tf.reflection.GenericModelType, value: any);
		append<T extends ModelPathElement>(modelPathElement: T): T;
		copy(): ModelPathElement;
		equals(obj: any): boolean;
		getDepth(): number;
		getNext(): ModelPathElement;
		protected getNode(): ModelPathNode;
		getPath(): ModelPath;

		getPrevious(): ModelPathElement;
		getType<T extends $tf.reflection.GenericModelType>(): T;
		getValue<T>(): T;
		hashCode(): number;
		iterator(): $tf.ListIterator<ModelPathElement>;
		iteratorAfter(): $tf.ListIterator<ModelPathElement>;
		protected onAdopt(nodeParam: ModelPathNode): void;
		protected onOrphaned(): void;
		prepend<T extends ModelPathElement>(modelPathElement: T): T;
		removeFromPath(): void;
		setType(type: $tf.reflection.GenericModelType): void;
		setValue(value: any): void;
	}

	// class com.braintribe.model.generic.path.ModelPathNode
	class ModelPathNode {
		next: ModelPathNode;
		previous: ModelPathNode;
		element: ModelPathElement;
		path: ModelPath;
	}

	// class com.braintribe.model.generic.path.PropertyPathElement
	class PropertyPathElement extends ModelPathElement {
		constructor(entity: $T.com.braintribe.model.generic.GenericEntity, property: $tf.reflection.Property, value: any);
		copy(): PropertyPathElement;
		getElementType(): ModelPathElementType;

		toString(): string;
	}

	// class com.braintribe.model.generic.path.RootPathElement
	class RootPathElement extends ModelPathElement {
		constructor(type: $tf.reflection.GenericModelType, value: any);
		copy(): RootPathElement;
		getElementType(): ModelPathElementType;

	}

	// class com.braintribe.model.generic.path.SetItemPathElement
	class SetItemPathElement extends ModelPathElement {
		constructor(entity: $T.com.braintribe.model.generic.GenericEntity, property: $tf.reflection.Property, type: $tf.reflection.GenericModelType, value: any);
		copy(): SetItemPathElement;
		getElementType(): ModelPathElementType;

	}

}

declare namespace $tf.query {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#parseQuery(String)

}

declare namespace $tf.reflection {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#typeReflection()
	function typeReflection(): GenericModelTypeReflection;
	// interface com.braintribe.model.generic.reflection.JsInteropAttribute
	interface Attribute {
		get<T>(entity: $T.com.braintribe.model.generic.GenericEntity): T;
		set(entity: $T.com.braintribe.model.generic.GenericEntity, value: any): void;
	}

}

declare namespace $tf.reflection.internal {

	// com.braintribe.gwt.genericmodel.client.itw.TfJsItwTools#ensureModel(JavaScriptObject)
	function ensureModel(modelAssembler: any): void;
}

declare namespace $tf.remote {

	// com.braintribe.gwt.tribefirejs.client.remote.TfJsRpcLatest#connect(String)
	function connect(servicesUrl: string): ServicesConnection;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#evaluate(String, ServiceRequest)

	// interface com.braintribe.gwt.tribefirejs.client.remote.EvaluatorBuilder
	interface EvaluatorBuilder {

		setDefaultDomain(domainId: string): EvaluatorBuilder;
	}

	// interface com.braintribe.gwt.tribefirejs.client.remote.ServicesConnection
	interface ServicesConnection {

		evaluatorBuilder(): EvaluatorBuilder;
		servicesUrl(): string;
	}

	// interface com.braintribe.gwt.tribefirejs.client.remote.ServicesSession
	interface ServicesSession extends ServicesConnection {
		decodeJse<T>(jseValue: string): globalThis.Promise<T>;


		sessionId(): string;
	}

}

declare namespace $tf.resources {

	// com.braintribe.gwt.genericmodel.client.resource.Resources#fromBlob(Blob)
	function fromBlob(blob: globalThis.Blob): $T.com.braintribe.model.resource.Resource;
	// com.braintribe.gwt.genericmodel.client.resource.Resources#fromFile(File)
	function fromFile(file: globalThis.File): $T.com.braintribe.model.resource.Resource;
	// interface com.braintribe.model.processing.session.api.resource.ResourceAccess
	interface ResourceAccess {
		create(): ResourceCreateBuilder;
		createFromFiles(files: globalThis.FileList): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
		openStream(resource: $T.com.braintribe.model.resource.Resource): $tf.InputStream;
		retrieve(resource: $T.com.braintribe.model.resource.Resource): ResourceRetrieveBuilder;
		update(resource: $T.com.braintribe.model.resource.Resource): ResourceUpdateBuilder;
		url(resource: $T.com.braintribe.model.resource.Resource): ResourceUrlBuilder;
		urlAsString(resource: $T.com.braintribe.model.resource.Resource): string;
		writeToStream(resource: $T.com.braintribe.model.resource.Resource, outputStream: $tf.OutputStream): void;
	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceCreateBuilder
	interface ResourceCreateBuilder {
		storeBlob(blob: globalThis.Blob): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
		storeFile(file: globalThis.File): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
		storeFileList(fileList: globalThis.FileList): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
		storeFiles(files: globalThis.File[]): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
		storeText(text: string): globalThis.Promise<$tf.List<$T.com.braintribe.model.resource.Resource>>;
	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceDeleteBuilder
	interface ResourceDeleteBuilder {
		useCase(useCase: string): ResourceDeleteBuilder;
	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceRetrieveBuilder
	interface ResourceRetrieveBuilder {
	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceUpdateBuilder
	interface ResourceUpdateBuilder {
		deleteOldResourceSource(keep: boolean): ResourceUpdateBuilder;
		withBlob(blob: globalThis.Blob): globalThis.Promise<$T.com.braintribe.model.resource.Resource>;
		withText(text: string): globalThis.Promise<$T.com.braintribe.model.resource.Resource>;
	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceUrlBuilder
	interface ResourceUrlBuilder {
		accessId(accessId: string): ResourceUrlBuilder;
		asString(): string;
		base(baseUrl: string): ResourceUrlBuilder;
		download(download: boolean): ResourceUrlBuilder;
		fileName(fileName: string): ResourceUrlBuilder;
		md5(md5: string): ResourceUrlBuilder;
		mimeType(mimeType: string): ResourceUrlBuilder;
		sessionId(sessionId: string): ResourceUrlBuilder;
		sourceType(sourceTypeSignature: string): ResourceUrlBuilder;
		specification(specification: string): ResourceUrlBuilder;
		tags(tags: string): ResourceUrlBuilder;
		useCase(useCase: string): ResourceUrlBuilder;
	}

}

declare namespace $tf.service {

	// interface com.braintribe.model.processing.service.api.ProcessorRegistry
	interface ProcessorRegistry {

	}

	// interface com.braintribe.model.processing.service.api.ServiceProcessor


	// interface com.braintribe.model.processing.service.api.ServiceRequestContext

	// interface com.braintribe.model.processing.service.api.ServiceRequestContextAspect
	interface ServiceRequestContextAspect<T> extends $tf.attr.TypeSafeAttribute<T> {
	}

	// interface com.braintribe.model.processing.service.api.ServiceRequestContextBuilder
	interface ServiceRequestContextBuilder extends $tf.attr.AttributeContextBuilder {
		set<A extends $tf.attr.TypeSafeAttribute<V>, V>(attribute: $tf.Class<A>, value: V): ServiceRequestContextBuilder;

	}

	// interface com.braintribe.model.processing.service.api.ServiceRequestSummaryLogger
	interface ServiceRequestSummaryLogger {
		isEnabled(): boolean;



		startTimer(partialDescription: string): void;
		stopTimer(): void;
		stopTimerWithDescription(partialDescription: string): void;

	}

	// class com.braintribe.model.processing.service.impl.AbstractServiceProcessor


	// class com.braintribe.model.processing.service.commons.StandardServiceRequestContext
	interface StandardServiceRequestContext {}
	class StandardServiceRequestContext extends $tf.attr.MapAttributeContext {

		derive(): ServiceRequestContextBuilder;
		findAspect<T, A extends ServiceRequestContextAspect<T>>(aspect: $tf.Class<A>): T;
		getAspect<T, A extends ServiceRequestContextAspect<T>>(aspect: $tf.Class<A>): $tf.Optional<T>;
		getAspect<T, A extends ServiceRequestContextAspect<T>>(aspect: $tf.Class<A>, def: T): T;

		responseConsumer(): $tf.Consumer<any>;

		setSummaryLogger(summaryLogger: ServiceRequestSummaryLogger): void;
		summaryLogger(): ServiceRequestSummaryLogger;
	}

}

declare namespace $tf.session {

	// interface com.braintribe.model.processing.session.api.persistence.CommitContext
	abstract class CommitContext {
		static COMMENT_META_DATA: string;
	}
	interface CommitContext {
		comment(text: string): CommitContext;
	}

	// interface com.braintribe.model.processing.session.api.persistence.CommitListener
	interface CommitListener {
	}

	// interface com.braintribe.gwt.async.client.DualAsyncCallback
	interface DualAsyncCallback<T> extends AsyncCallback<T>, $tf.async.AsyncCallback<T> {
	}

	// interface com.braintribe.model.processing.session.api.managed.EntityAccessBuilder
	interface EntityAccessBuilder<T extends $T.com.braintribe.model.generic.GenericEntity> {
		find(asyncCallback: $tf.async.AsyncCallback<T>): void;
		findSync(): T;
		require(asyncCallback: $tf.async.AsyncCallback<T>): void;
		requireSync(): T;
	}

	// interface com.braintribe.model.processing.session.api.notifying.EntityCreation
	interface EntityCreation<T extends $T.com.braintribe.model.generic.GenericEntity> {
		global(globalId: string): T;
		globalWithRandomUuid(): T;
		persistent(id: any): T;
		preliminary(): T;
		raw(): EntityCreation<T>;
		withPartition(partition: string): EntityCreation<T>;
	}

	// interface com.braintribe.model.processing.session.api.managed.EntityQueryExecution
	interface EntityQueryExecution extends EntityQueryResultConvenience {
		result(callback: $tf.async.AsyncCallback<EntityQueryResultConvenience>): void;
	}

	// interface com.braintribe.model.processing.session.api.managed.EntityQueryResultConvenience
	interface EntityQueryResultConvenience extends QueryResultConvenience {

		setTraversingCriterion(traversingCriterion: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): EntityQueryResultConvenience;
		setVariable(name: string, value: any): EntityQueryResultConvenience;
	}

	// interface com.braintribe.model.processing.session.api.notifying.interceptors.InterceptorIdentification
	interface InterceptorIdentification {
	}

	// interface com.braintribe.model.processing.session.api.managed.ManagedGmSession
	interface ManagedGmSession extends NotifyingGmSession {
		acquire<T extends $T.com.braintribe.model.generic.GenericEntity>(entityType: $tf.reflection.EntityType<T>, globalId: string): T;
		deleteEntity(entity: $T.com.braintribe.model.generic.GenericEntity): void;
		getModelAccessory(): ModelAccessory;
		manipulate(): ManipulationApplicationContextBuilder;
		merge(): MergeBuilder;
		query(): SessionQueryBuilder;
		resources(): $tf.resources.ResourceAccess;
	}

	// interface com.braintribe.model.processing.session.api.managed.ManipulationApplicationContext
	interface ManipulationApplicationContext {
		getLenience(): ManipulationLenience;
		getMode(): ManipulationMode;
	}

	// interface com.braintribe.model.processing.session.api.managed.ManipulationApplicationContextBuilder
	interface ManipulationApplicationContextBuilder {
		apply(manipulation: $T.com.braintribe.model.generic.manipulation.Manipulation): ManipulationReport;
		context(): ManipulationApplicationContext;
		lenience(lenience: ManipulationLenience): ManipulationApplicationContextBuilder;
		mode(mode: ManipulationMode): ManipulationApplicationContextBuilder;
	}

	// interface com.braintribe.model.processing.session.api.managed.ManipulationReport
	interface ManipulationReport {
		getInstantiations(): $tf.Map<$T.com.braintribe.model.generic.value.EntityReference, $T.com.braintribe.model.generic.GenericEntity>;
		getLenientManifestations(): $tf.Map<$tf.reflection.EntityType<any>, $tf.Set<$T.com.braintribe.model.generic.GenericEntity>>;
	}

	// interface com.braintribe.model.processing.session.api.managed.MergeBuilder
	interface MergeBuilder {
		adoptUnexposed(adopt: boolean): MergeBuilder;
		doFor<T>(data: T, asyncCallback: $tf.async.AsyncCallback<T>): void;
		doForSync<T>(data: T): T;
		envelopeFactory(envelopeFactory: $tf.Function<$T.com.braintribe.model.generic.GenericEntity, $T.com.braintribe.model.generic.GenericEntity>): MergeBuilder;
		keepEnvelope(keepEvelope: boolean): MergeBuilder;
		suspendHistory(suspend: boolean): MergeBuilder;
		transferTransientProperties(transferTransientProperties: boolean): MergeBuilder;
	}

	// interface com.braintribe.model.processing.session.api.managed.ModelAccessory
	interface ModelAccessory {
		addListener(modelAccessoryListener: ModelAccessoryListener): void;
		getCmdResolver(): $tf.metadata.CmdResolver;
		getIdType<T extends $tf.reflection.ScalarType>(typeSignature: string): T;
		getMetaData(): $tf.metadata.ModelMdResolver;

		getModelSession(): ManagedGmSession;
		getOracle(): $tf.model.ModelOracle;
		isUpToDate(): boolean;
		removeListener(modelAccessoryListener: ModelAccessoryListener): void;
	}

	// interface com.braintribe.model.processing.session.api.managed.ModelAccessoryListener
	interface ModelAccessoryListener {
		onOutdated(): void;
	}

	// interface com.braintribe.model.processing.session.api.transaction.NestedTransaction
	interface NestedTransaction extends TransactionFrame {
		commit(): void;
		getParentFrame(): TransactionFrame;
		rollback(): void;
	}

	// interface com.braintribe.model.processing.session.api.notifying.NotifyingGmSession
	interface NotifyingGmSession extends GmSession {
		attach(entity: $T.com.braintribe.model.generic.GenericEntity): void;
		createEntity<T extends $T.com.braintribe.model.generic.GenericEntity>(type: $tf.reflection.EntityType<T>): EntityCreation<T>;
		getCompoundNotificationStack(): $tf.Stack<any>; // JS-WARN: com.braintribe.model.processing.session.api.notifying.CompoundNotification
		interceptors(): PropertyAccessInterceptorRegistry;
		listeners(): $tf.manipulation.GenericManipulationListenerRegistry;
	}

	// interface com.braintribe.model.processing.session.api.persistence.PersistenceEntityAccessBuilder
	interface PersistenceEntityAccessBuilder<T extends $T.com.braintribe.model.generic.GenericEntity> extends EntityAccessBuilder<T> {
		find(): T;
		findLocalOrBuildShallow(): T;
		refresh(asyncCallback: $tf.async.AsyncCallback<T>): void;
		refreshSync(): T;
		withTraversingCriterion(tc: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): PersistenceEntityAccessBuilder<T>;
	}

	// interface com.braintribe.model.processing.session.api.persistence.PersistenceGmSession
	interface PersistenceGmSession{

		getAccessId(): string;
		getSessionAspect<T>(aspectClass: $tf.Class<SessionAspect<T>>): T;
		getSessionAuthorization(): SessionAuthorization;
		getTransaction(): Transaction;
		listeners(): $tf.manipulation.PersistenceManipulationListenerRegistry;
		newEquivalentSession(): PersistenceGmSession;
		prepareCommit(): CommitContext;
		query(): PersistenceSessionQueryBuilder;
		queryCache(): SessionQueryBuilder;
		queryDetached(): SessionQueryBuilder;
		shallowifyInstances(): void;
	}

	// interface com.braintribe.model.processing.session.api.persistence.PersistenceSessionQueryBuilder
	interface PersistenceSessionQueryBuilder extends SessionQueryBuilder {
		entity<T extends $T.com.braintribe.model.generic.GenericEntity>(entity: T): PersistenceEntityAccessBuilder<T>;
		entityByReference<T extends $T.com.braintribe.model.generic.GenericEntity>(entityReference: $T.com.braintribe.model.generic.value.EntityReference): PersistenceEntityAccessBuilder<T>;
		entityBySignatureAndId<T extends $T.com.braintribe.model.generic.GenericEntity>(typeSignature: string, id: any): PersistenceEntityAccessBuilder<T>;
		entityBySignatureIdAndPartition<T extends $T.com.braintribe.model.generic.GenericEntity>(typeSignature: string, id: any, partition: string): PersistenceEntityAccessBuilder<T>;
		entityByTypeAndId<T extends $T.com.braintribe.model.generic.GenericEntity>(entityType: $tf.reflection.EntityType<T>, id: any): PersistenceEntityAccessBuilder<T>;
		entityByTypeIdAndPartition<T extends $T.com.braintribe.model.generic.GenericEntity>(entityType: $tf.reflection.EntityType<T>, id: any, partition: string): PersistenceEntityAccessBuilder<T>;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseAsyncFunction
	interface PromiseAsyncFunction<I, O> {
		apply(value: I, callback: $tf.async.AsyncCallback<O>): void;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseAsyncGwtFunction
	interface PromiseAsyncGwtFunction<I, O> {
		apply(value: I, callback: $tf.async.AsyncCallback<O>): void;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseConsumer
	interface PromiseConsumer<T> {
		accept(value: T): void;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseError
	interface PromiseError {
		path(): string;
		setThrowable(throwable: $tf.Throwable): void;
		throwable(): $tf.Throwable;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseFunction
	interface PromiseFunction<I, O> {
		apply(value: I): O;
	}

	// interface com.braintribe.gwt.async.client.promise.api.PromiseRunnable
	interface PromiseRunnable {
		run(): void;
	}

	// interface com.braintribe.model.processing.session.api.notifying.PropertyAccessInterceptorRegistry
	interface PropertyAccessInterceptorRegistry {
		add(interceptor: $tf.reflection.PropertyAccessInterceptor): void;
		after(identification: $tf.Class<InterceptorIdentification>): PropertyAccessInterceptorRegistry;
		before(identification: $tf.Class<InterceptorIdentification>): PropertyAccessInterceptorRegistry;
		remove(interceptor: $tf.reflection.PropertyAccessInterceptor): void;
		replace(identification: $tf.Class<InterceptorIdentification>, interceptor: $tf.reflection.PropertyAccessInterceptor): $tf.reflection.PropertyAccessInterceptor;
	}

	// interface com.braintribe.model.processing.session.api.managed.PropertyQueryExecution
	interface PropertyQueryExecution extends PropertyQueryResultConvenience {
		resultAsync(callback: $tf.async.AsyncCallback<PropertyQueryResultConvenience>): void;
	}

	// interface com.braintribe.model.processing.session.api.managed.PropertyQueryResultConvenience
	interface PropertyQueryResultConvenience extends QueryResultConvenience {
		setTraversingCriterion(traversingCriterion: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): PropertyQueryResultConvenience;
		setVariable(name: string, value: any): PropertyQueryResultConvenience;
	}

	// interface com.braintribe.model.processing.session.api.managed.QueryExecution
	interface QueryExecution extends QueryResultConvenience {
		result(callback: $tf.async.AsyncCallback<QueryResultConvenience>): void;
	}

	// interface com.braintribe.model.processing.session.api.managed.QueryResultConvenience
	interface QueryResultConvenience {
		first<E>(): E;
		list<E>(): $tf.List<E>;
		setTraversingCriterion(traversingCriterion: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): QueryResultConvenience;
		setVariable(name: string, value: any): QueryResultConvenience;
		unique<E>(): E;
		value<E>(): E;
	}

	// interface com.braintribe.model.processing.session.api.persistence.QueryResultMergeListener
	interface QueryResultMergeListener {

	}

	// interface com.braintribe.model.processing.session.api.resource.ResourceAccessFactory
	interface ResourceAccessFactory<T> {
		newInstance(session: T): $tf.resources.ResourceAccess;
	}

	// interface com.braintribe.model.processing.session.api.managed.SelectQueryExecution
	interface SelectQueryExecution extends SelectQueryResultConvenience {
		resultAsync(callback: $tf.async.AsyncCallback<SelectQueryResultConvenience>): void;
	}

	// interface com.braintribe.model.processing.session.api.managed.SelectQueryResultConvenience
	interface SelectQueryResultConvenience extends QueryResultConvenience {

		setTraversingCriterion(traversingCriterion: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): SelectQueryResultConvenience;
		setVariable(name: string, value: any): SelectQueryResultConvenience;
	}

	// interface com.braintribe.model.processing.session.api.persistence.aspects.SessionAspect
	interface SessionAspect<T> {
	}

	// interface com.braintribe.model.processing.session.api.persistence.auth.SessionAuthorization
	interface SessionAuthorization {
		getSessionId(): string;
		getUserId(): string;
		getUserName(): string;
		getUserRoles(): $tf.Set<string>;
	}

	// interface com.braintribe.model.processing.session.api.managed.SessionQueryBuilder
	interface SessionQueryBuilder {
		entitiesString(entityQueryString: string): globalThis.Promise<EntityQueryResultConvenience>;
		entity<T extends $T.com.braintribe.model.generic.GenericEntity>(entity: T): EntityAccessBuilder<T>;

		entityQueryStringExecution(entityQueryString: string): EntityQueryExecution;
		findEntity<T extends $T.com.braintribe.model.generic.GenericEntity>(globalId: string): T;
		getEntity<T extends $T.com.braintribe.model.generic.GenericEntity>(globalId: string): T;


		propertyQueryStringExecution(propertyQueryString: string): PropertyQueryExecution;
		propertyString(propertyQueryString: string): globalThis.Promise<PropertyQueryResultConvenience>;
		queryViaString(queryString: string): QueryExecution;
		selectQueryStringExecution(selectQueryString: string): SelectQueryExecution;
		selectString(selectQueryString: string): globalThis.Promise<SelectQueryResultConvenience>;
	}

	// interface com.braintribe.model.processing.session.api.transaction.Transaction
	interface Transaction extends TransactionFrame {
		created(entity: $T.com.braintribe.model.generic.GenericEntity): boolean;
		getCurrentTransactionFrame(): TransactionFrame;
		hasManipulations(): boolean;
		willPersist(entity: $T.com.braintribe.model.generic.GenericEntity): boolean;
	}

	// interface com.braintribe.model.processing.session.api.transaction.TransactionFrame
	interface TransactionFrame {
		addTransactionFrameListener(listener: TransactionFrameListener): void;
		beginNestedTransaction(): NestedTransaction;
		canRedo(): boolean;
		canUndo(): boolean;
		getManipulationsDone(): $tf.List<$T.com.braintribe.model.generic.manipulation.Manipulation>;
		getManipulationsUndone(): $tf.List<$T.com.braintribe.model.generic.manipulation.Manipulation>;
		redo(steps: number): void;
		removeTransactionFrameListener(listener: TransactionFrameListener): void;
		undo(steps: number): void;
	}

	// interface com.braintribe.model.processing.session.api.transaction.TransactionFrameListener
	interface TransactionFrameListener {
		onDoUndoStateChanged(transactionFrame: TransactionFrame): void;
	}

	// enum com.braintribe.gwt.async.client.Future$State
	interface Future$State extends $tf.Comparable<Future$State>{}
	class Future$State {
		static outstanding: Future$State;
		static success: Future$State;
		static failure: Future$State;
	}

	// enum com.braintribe.model.processing.session.api.managed.ManipulationLenience
	interface ManipulationLenience extends $tf.Comparable<ManipulationLenience>{}
	class ManipulationLenience {
		static none: ManipulationLenience;
		static ignoreOnUnknownEntity: ManipulationLenience;
		static manifestOnUnknownEntity: ManipulationLenience;
	}

	// enum com.braintribe.model.processing.session.api.managed.ManipulationMode
	interface ManipulationMode extends $tf.Comparable<ManipulationMode>{}
	class ManipulationMode {
		static LOCAL: ManipulationMode;
		static REMOTE: ManipulationMode;
		static REMOTE_GLOBAL: ManipulationMode;
	}

	// class com.braintribe.model.processing.session.api.persistence.AccessDescriptor
	class AccessDescriptor {

		accessDenotationType(): string;
		accessId(): string;

	}

	// class com.braintribe.model.processing.session.impl.managed.BasicManagedGmSession
	interface BasicManagedGmSession extends ManagedGmSession, NotifyingGmSession, GmSession {}
	class BasicManagedGmSession {
		constructor();
		entityManipulationListeners: $tf.Map<$T.com.braintribe.model.generic.GenericEntity, $tf.manipulation.ManipulationListener>;
		protected getResourcesAccess(): $tf.resources.ResourceAccess;
		resources(): $tf.resources.ResourceAccess;
		setResourcesAccess(resourcesAccess: $tf.resources.ResourceAccess): void;
		setResourcesAccessFactory(resourcesAccessFactory: ResourceAccessFactory<BasicManagedGmSession>): void;
	}

	// class com.braintribe.gwt.async.client.Future
	interface Future<T> extends DualAsyncCallback<T> {}
	class Future<T> {
		constructor();
		static async<T>(failure: $tf.Consumer<$tf.Throwable>, success: $tf.Consumer<T>): $tf.async.AsyncCallback<T>;
		static asyncGwt<T>(failure: $tf.Consumer<$tf.Throwable>, success: $tf.Consumer<T>): AsyncCallback<T>;
		static fromAsyncCallbackConsumer<T>(consumer: $tf.util.CheckedConsumer<DualAsyncCallback<T>, $tf.Throwable>): Future<T>;
		static fromError<T>(e: $tf.Throwable): Future<T>;
		static fromSupplier<T>(supplier: $tf.util.CheckedSupplier<T, $tf.Throwable>): Future<T>;
		static of<T>(value: T): Future<T>;
		andFinally(runnable: $tf.util.CheckedRunnable<$tf.Throwable>): Future<T>;
		andThen(consumer: $tf.util.CheckedConsumer<T, $tf.Throwable>): Future<T>;
		andThenMap<X>(mappingFunction: $tf.util.CheckedFunction<T, X, $tf.Throwable>): Future<X>;
		andThenMapAsync<X>(mappingFunction: $tf.util.CheckedFunction<T, Future<X>, $tf.Throwable>): Future<X>;
		andThenNotify<X>(consumer: $tf.util.CheckedBiConsumer<T, DualAsyncCallback<X>, $tf.Throwable>): Future<X>;
		andThenOrOnError(consumer: $tf.util.CheckedBiConsumer<T, $tf.Throwable, $tf.Throwable>): Future<T>;
		catchError(valueProvider: $tf.util.CheckedFunction<$tf.Throwable, T, $tf.Throwable>): Future<T>;
		contextualizeError(contextualizer: $tf.util.CheckedFunction<$tf.Throwable, $tf.Throwable, $tf.Throwable>): Future<T>;
		get(asyncCallback: AsyncCallback<T>): void;
		getByConsumer(success: $tf.Consumer<T>, failure: $tf.Consumer<$tf.Throwable>): void;
		getResult(): T;
		getState(): Future$State;
		load(asyncCallback: AsyncCallback<T>): void;
		onError(consumer: $tf.util.CheckedConsumer<$tf.Throwable, $tf.Throwable>): Future<T>;
		onFailure(caught: $tf.Throwable): void;
		onSuccess(result: T): void;
		passAdapted<X>(callback: AsyncCallback<X>, adapter: $tf.Function<T, X>): void;
		remove(asyncCallback: AsyncCallback<T>): boolean;
		toJsPromise(): globalThis.Promise<T>;
	}

}

declare namespace $tf.tc {

	// class com.braintribe.model.generic.processing.pr.fluent.CriterionBuilder
	class CriterionBuilder<T> {
		conjunction(): JunctionBuilder<T>;
		criterion(criterion: $T.com.braintribe.model.generic.pr.criteria.TraversingCriterion): T;
		disjunction(): JunctionBuilder<T>;
		emptyEntity(): T;
		emptyProperty(): T;
		emptylistElement(): T;
		entity(typeSignature: string): T;
		entityViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		entityViaType(entityType: $tf.reflection.EntityType<any>): T;
		joker(): T;
		listElement(typeSignature: string): T;
		listElementViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		listElementViaType(type: $tf.reflection.GenericModelType): T;
		map(): T;
		mapKey(): T;
		mapKeyViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		mapKeyViaType(type: $tf.reflection.GenericModelType): T;
		mapKeyViaTypeSignature(typeSignature: string): T;
		mapValue(): T;
		mapValueViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		mapValueViaType(type: $tf.reflection.GenericModelType): T;
		mapValueViaTypeSignature(typeSignature: string): T;
		mapViaType(type: $tf.reflection.GenericModelType): T;
		mapViaTypeSignature(typeSignature: string): T;
		negation(): CriterionBuilder<T>;
		pattern(): PatternBuilder<T>;
		placeholder(name: string): T;
		property(name: string): T;
		propertyTypeViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		propertyTypeViaType(type: $tf.reflection.GenericModelType): T;
		propertyTypeViaTypeSignature(typeSignature: string): T;
		propertyWithType(name: string, typeSignature: string): T;
		propertyWithTypeViaClass(name: string, entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		propertyWithTypeViaType(name: string, type: $tf.reflection.GenericModelType): T;
		recursion(min: number, max: number): CriterionBuilder<T>;
		root(): T;
		rootTypeSignature(typeSignature: string): T;
		rootViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		rootViaType(type: $tf.reflection.GenericModelType): T;
		setElement(): T;
		setElementViaClass(entityClass: $tf.Class<$T.com.braintribe.model.generic.GenericEntity>): T;
		setElementViaSignature(typeSignature: string): T;
		setElementViaType(type: $tf.reflection.GenericModelType): T;
	}

	// class com.braintribe.model.generic.processing.pr.fluent.JunctionBuilder
	class JunctionBuilder<T> extends CriterionBuilder<JunctionBuilder<T>> {
		close(): T;
	}

	// class com.braintribe.model.generic.processing.pr.fluent.PatternBuilder
	class PatternBuilder<T> extends CriterionBuilder<PatternBuilder<T>> {
		close(): T;
	}

}

declare namespace $tf.time {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#toDate(int, int, int)
	function date(year: number, month: number, dayOfMonth: number): $tf.Date;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#toDateTime(int, int, int, int, int, int)
	function datetime(year: number, month: number, dayOfMonth: number, hours: number, minutes: number, seconds: number): $tf.Date;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#now()
	function now(): $tf.Date;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#toDate(String, String)
	function parseDate(dateString: string, dtf: string): $tf.Date;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#printDate(Date, String)
	function printDate(date: $tf.Date, dtf: string): string;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#toTime(int, int, int)
	function time(hours: number, minutes: number, seconds: number): $tf.Date;
}

declare namespace $tf.util {

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#consumer(Object)
	function consumer<T>(accept: any): $tf.Consumer<T>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#loadModelFile(String)

	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#newDenotationMap()
	function newDenotationMap<K extends $T.com.braintribe.model.generic.GenericEntity, V>(): MutableDenotationMap<K, V>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#newUuid()
	function newUuid(): string;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#predicate(Object)
	function predicate<T>(test: any): $tf.Predicate<T>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#streamAsArray(Stream)
	function streamAsArray<T>(stream: $tf.Stream<T>): any[];
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#streamAsList(Stream)
	function streamAsList<T>(stream: $tf.Stream<T>): $tf.List<T>;
	// com.braintribe.gwt.tribefirejs.client.tools.StaticTools#streamAsSet(Stream)
	function streamAsSet<T>(stream: $tf.Stream<T>): $tf.Set<T>;
	// class com.braintribe.common.lcd.Pair
	class Pair<F, S> {
		constructor(first: F, second: S);
		first: F;
		second: S;
		static of<F, S>(first: F, second: S): Pair<F, S>;
		equals(other: any): boolean;
		getFirst(): F;
		getSecond(): S;
		hashCode(): number;
		toString(): string;
	}

	// class com.braintribe.gwt.tribefirejs.client.error.TfJsError
	class TfJsError extends $tf.Throwable {
		constructor(t: any);
		getCause(): $tf.Throwable;
		getJsCause(): $tf.Throwable;
		getJsLocalizedMessage(): string;
		getJsMessage(): string;
		getJsStackTrace(): $tf.StackTraceElement[];
		getLocalizedMessage(): string;
		getMessage(): string;
		getSimpleName(): string;
		getStack(): string;
		getStackTrace(): $tf.StackTraceElement[];
		getTypeName(): string;
		isNative(): boolean;
		log(): void;
		printStackTrace(): void;
	}

}

