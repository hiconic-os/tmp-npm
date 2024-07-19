import "@hiconic-os/com.braintribe.gm--gm-core-api";

export const meta = {
	groupId: "com.braintribe.gm",
	artifactId: "root-model",
	version: "2.0.23",
}

function modelAssembler($, P, _) {
//JSE version=4.0
//BEGIN_TYPES
P.a=$.T("com.braintribe.model.meta.GmMetaModel");
P.b=$.T("com.braintribe.model.meta.GmEntityType");
P.c=$.T("com.braintribe.model.meta.override.GmPropertyOverride");
P.d=$.T("com.braintribe.model.meta.GmProperty");
P.e=$.T("com.braintribe.model.meta.GmStringType");
P.f=$.T("com.braintribe.model.meta.GmBaseType");
//END_TYPES
P.g=$.P(P.a,'name');P.h=$.P(P.a,'types');P.i=$.P(P.a,'version');P.j=$.P(P.b,'globalId');P.k=$.P(P.b,'isAbstract');P.l=$.P(P.b,'propertyOverrides');P.m=$.P(P.b,'superTypes');
P.n=$.P(P.b,'typeSignature');P.o=$.P(P.b,'properties');P.p=$.P(P.c,'declaringTypeInfo');P.q=$.P(P.c,'globalId');P.r=$.P(P.c,'property');P.s=$.P(P.d,'declaringType');
P.t=$.P(P.d,'globalId');P.u=$.P(P.d,'name');P.v=$.P(P.d,'nullable');P.w=$.P(P.d,'type');P.x=$.P(P.e,'typeSignature');P.y=$.P(P.f,'typeSignature');
P.z=$.C(P.a);P.A=$.C(P.b);P.B=$.C(P.b);P.C=$.C(P.b);P.D=$.C(P.b);P.E=$.C(P.c);P.F=$.C(P.c);P.G=$.C(P.d);P.H=$.C(P.d);P.I=$.C(P.d);P.J=$.C(P.c);P.K=$.C(P.e);P.L=$.C(P.f);
_=P.z;
$.s(_,P.g,"com.braintribe.gm:root-model");
$.s(_,P.h,$.S([P.A,P.B,P.C,P.D]));
$.s(_,P.i,"2.0.23");
_=P.A;
$.s(_,P.j,"type:com.braintribe.model.generic.StandardIntegerIdentifiable");
$.s(_,P.k,$.y);
$.s(_,P.l,$.L([P.E]));
$.s(_,P.m,$.L([P.C]));
$.s(_,P.n,"com.braintribe.model.generic.StandardIntegerIdentifiable");
_=P.B;
$.s(_,P.j,"type:com.braintribe.model.generic.StandardIdentifiable");
$.s(_,P.k,$.y);
$.s(_,P.l,$.L([P.F]));
$.s(_,P.m,$.L([P.C]));
$.s(_,P.n,"com.braintribe.model.generic.StandardIdentifiable");
_=P.C;
$.s(_,P.j,"type:com.braintribe.model.generic.GenericEntity");
$.s(_,P.k,$.y);
$.s(_,P.o,$.L([P.G,P.H,P.I]));
$.s(_,P.n,"com.braintribe.model.generic.GenericEntity");
_=P.D;
$.s(_,P.j,"type:com.braintribe.model.generic.StandardStringIdentifiable");
$.s(_,P.k,$.y);
$.s(_,P.l,$.L([P.J]));
$.s(_,P.m,$.L([P.C]));
$.s(_,P.n,"com.braintribe.model.generic.StandardStringIdentifiable");
_=P.E;
$.s(_,P.p,P.A);
$.s(_,P.q,"propertyOverride:com.braintribe.model.generic.StandardIntegerIdentifiable/id");
$.s(_,P.r,P.H);
_=P.F;
$.s(_,P.p,P.B);
$.s(_,P.q,"propertyOverride:com.braintribe.model.generic.StandardIdentifiable/id");
$.s(_,P.r,P.H);
_=P.G;
$.s(_,P.s,P.C);
$.s(_,P.t,"property:com.braintribe.model.generic.GenericEntity/globalId");
$.s(_,P.u,"globalId");
$.s(_,P.v,$.y);
$.s(_,P.w,P.K);
_=P.H;
$.s(_,P.s,P.C);
$.s(_,P.t,"property:com.braintribe.model.generic.GenericEntity/id");
$.s(_,P.u,"id");
$.s(_,P.v,$.y);
$.s(_,P.w,P.L);
_=P.I;
$.s(_,P.s,P.C);
$.s(_,P.t,"property:com.braintribe.model.generic.GenericEntity/partition");
$.s(_,P.u,"partition");
$.s(_,P.v,$.y);
$.s(_,P.w,P.K);
_=P.J;
$.s(_,P.p,P.D);
$.s(_,P.q,"propertyOverride:com.braintribe.model.generic.StandardStringIdentifiable/id");
$.s(_,P.r,P.H);
_=P.K;
$.s(_,P.x,"string");
_=P.L;
$.s(_,P.y,"object");
return P.z;
[2826];
}

$tf.reflection.internal.ensureModel(modelAssembler)

export const GenericEntity = $T.com.braintribe.model.generic.GenericEntity;
export const StandardIdentifiable = $T.com.braintribe.model.generic.StandardIdentifiable;
export const StandardIntegerIdentifiable = $T.com.braintribe.model.generic.StandardIntegerIdentifiable;
export const StandardStringIdentifiable = $T.com.braintribe.model.generic.StandardStringIdentifiable;
