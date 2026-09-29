
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  CodeEditor: typeof import("../../components/CodeEditor.vue")['default']
  DocenteCurriculumBuilderModals: typeof import("../../components/docente/CurriculumBuilderModals.vue")['default']
  DocenteExercisePreview: typeof import("../../components/docente/ExercisePreview.vue")['default']
  DocenteExerciseTypeIcon: typeof import("../../components/docente/ExerciseTypeIcon.vue")['default']
  DocenteLessonEditor: typeof import("../../components/docente/LessonEditor.vue")['default']
  DocenteTutorSettingsPanel: typeof import("../../components/docente/TutorSettingsPanel.vue")['default']
  DocenteUnitExercisesPanel: typeof import("../../components/docente/UnitExercisesPanel.vue")['default']
  DocenteUnitLessonsModal: typeof import("../../components/docente/UnitLessonsModal.vue")['default']
  DocenteExerciseBuildersCodingExerciseBuilder: typeof import("../../components/docente/exercise-builders/CodingExerciseBuilder.vue")['default']
  DocenteExerciseBuildersDragDropExerciseBuilder: typeof import("../../components/docente/exercise-builders/DragDropExerciseBuilder.vue")['default']
  DocenteExerciseBuildersFillCodeExerciseBuilder: typeof import("../../components/docente/exercise-builders/FillCodeExerciseBuilder.vue")['default']
  DocenteExerciseBuildersHtmlCssExerciseBuilder: typeof import("../../components/docente/exercise-builders/HtmlCssExerciseBuilder.vue")['default']
  DocenteExerciseBuildersMatchingExerciseBuilder: typeof import("../../components/docente/exercise-builders/MatchingExerciseBuilder.vue")['default']
  DocenteExerciseBuildersMcqExerciseBuilder: typeof import("../../components/docente/exercise-builders/McqExerciseBuilder.vue")['default']
  DocenteExerciseBuildersOrderingExerciseBuilder: typeof import("../../components/docente/exercise-builders/OrderingExerciseBuilder.vue")['default']
  ExerciseDragDropExercise: typeof import("../../components/exercise/DragDropExercise.vue")['default']
  ExerciseFillCodeExercise: typeof import("../../components/exercise/FillCodeExercise.vue")['default']
  ExerciseHtmlCssExercise: typeof import("../../components/exercise/HtmlCssExercise.vue")['default']
  ExerciseMatchingExercise: typeof import("../../components/exercise/MatchingExercise.vue")['default']
  ExerciseMcqExercise: typeof import("../../components/exercise/McqExercise.vue")['default']
  ExerciseOrderingExercise: typeof import("../../components/exercise/OrderingExercise.vue")['default']
  LayoutFondoTecnologico: typeof import("../../components/layout/FondoTecnologico.vue")['default']
  LayoutFooterBar: typeof import("../../components/layout/FooterBar.vue")['default']
  LayoutHeaderNav: typeof import("../../components/layout/HeaderNav.vue")['default']
  LayoutMarcaST: typeof import("../../components/layout/MarcaST.vue")['default']
  LayoutNotificationBell: typeof import("../../components/layout/NotificationBell.vue")['default']
  LayoutSidebarNav: typeof import("../../components/layout/SidebarNav.vue")['default']
  PerfilForm: typeof import("../../components/perfil/Form.vue")['default']
  TutorChatDrawer: typeof import("../../components/tutor/TutorChatDrawer.vue")['default']
  TutorKeyPanel: typeof import("../../components/tutor/TutorKeyPanel.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyCodeEditor: LazyComponent<typeof import("../../components/CodeEditor.vue")['default']>
  LazyDocenteCurriculumBuilderModals: LazyComponent<typeof import("../../components/docente/CurriculumBuilderModals.vue")['default']>
  LazyDocenteExercisePreview: LazyComponent<typeof import("../../components/docente/ExercisePreview.vue")['default']>
  LazyDocenteExerciseTypeIcon: LazyComponent<typeof import("../../components/docente/ExerciseTypeIcon.vue")['default']>
  LazyDocenteLessonEditor: LazyComponent<typeof import("../../components/docente/LessonEditor.vue")['default']>
  LazyDocenteTutorSettingsPanel: LazyComponent<typeof import("../../components/docente/TutorSettingsPanel.vue")['default']>
  LazyDocenteUnitExercisesPanel: LazyComponent<typeof import("../../components/docente/UnitExercisesPanel.vue")['default']>
  LazyDocenteUnitLessonsModal: LazyComponent<typeof import("../../components/docente/UnitLessonsModal.vue")['default']>
  LazyDocenteExerciseBuildersCodingExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/CodingExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersDragDropExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/DragDropExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersFillCodeExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/FillCodeExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersHtmlCssExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/HtmlCssExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersMatchingExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/MatchingExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersMcqExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/McqExerciseBuilder.vue")['default']>
  LazyDocenteExerciseBuildersOrderingExerciseBuilder: LazyComponent<typeof import("../../components/docente/exercise-builders/OrderingExerciseBuilder.vue")['default']>
  LazyExerciseDragDropExercise: LazyComponent<typeof import("../../components/exercise/DragDropExercise.vue")['default']>
  LazyExerciseFillCodeExercise: LazyComponent<typeof import("../../components/exercise/FillCodeExercise.vue")['default']>
  LazyExerciseHtmlCssExercise: LazyComponent<typeof import("../../components/exercise/HtmlCssExercise.vue")['default']>
  LazyExerciseMatchingExercise: LazyComponent<typeof import("../../components/exercise/MatchingExercise.vue")['default']>
  LazyExerciseMcqExercise: LazyComponent<typeof import("../../components/exercise/McqExercise.vue")['default']>
  LazyExerciseOrderingExercise: LazyComponent<typeof import("../../components/exercise/OrderingExercise.vue")['default']>
  LazyLayoutFondoTecnologico: LazyComponent<typeof import("../../components/layout/FondoTecnologico.vue")['default']>
  LazyLayoutFooterBar: LazyComponent<typeof import("../../components/layout/FooterBar.vue")['default']>
  LazyLayoutHeaderNav: LazyComponent<typeof import("../../components/layout/HeaderNav.vue")['default']>
  LazyLayoutMarcaST: LazyComponent<typeof import("../../components/layout/MarcaST.vue")['default']>
  LazyLayoutNotificationBell: LazyComponent<typeof import("../../components/layout/NotificationBell.vue")['default']>
  LazyLayoutSidebarNav: LazyComponent<typeof import("../../components/layout/SidebarNav.vue")['default']>
  LazyPerfilForm: LazyComponent<typeof import("../../components/perfil/Form.vue")['default']>
  LazyTutorChatDrawer: LazyComponent<typeof import("../../components/tutor/TutorChatDrawer.vue")['default']>
  LazyTutorKeyPanel: LazyComponent<typeof import("../../components/tutor/TutorKeyPanel.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
