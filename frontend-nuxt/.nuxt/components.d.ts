
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


export const CodeEditor: typeof import("../components/CodeEditor.vue")['default']
export const DocenteCurriculumBuilderModals: typeof import("../components/docente/CurriculumBuilderModals.vue")['default']
export const DocenteExercisePreview: typeof import("../components/docente/ExercisePreview.vue")['default']
export const DocenteExerciseTypeIcon: typeof import("../components/docente/ExerciseTypeIcon.vue")['default']
export const DocenteLessonEditor: typeof import("../components/docente/LessonEditor.vue")['default']
export const DocenteTutorSettingsPanel: typeof import("../components/docente/TutorSettingsPanel.vue")['default']
export const DocenteUnitExercisesPanel: typeof import("../components/docente/UnitExercisesPanel.vue")['default']
export const DocenteUnitLessonsModal: typeof import("../components/docente/UnitLessonsModal.vue")['default']
export const DocenteExerciseBuildersCodingExerciseBuilder: typeof import("../components/docente/exercise-builders/CodingExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersDragDropExerciseBuilder: typeof import("../components/docente/exercise-builders/DragDropExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersFillCodeExerciseBuilder: typeof import("../components/docente/exercise-builders/FillCodeExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersHtmlCssExerciseBuilder: typeof import("../components/docente/exercise-builders/HtmlCssExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersMatchingExerciseBuilder: typeof import("../components/docente/exercise-builders/MatchingExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersMcqExerciseBuilder: typeof import("../components/docente/exercise-builders/McqExerciseBuilder.vue")['default']
export const DocenteExerciseBuildersOrderingExerciseBuilder: typeof import("../components/docente/exercise-builders/OrderingExerciseBuilder.vue")['default']
export const ExerciseDragDropExercise: typeof import("../components/exercise/DragDropExercise.vue")['default']
export const ExerciseFillCodeExercise: typeof import("../components/exercise/FillCodeExercise.vue")['default']
export const ExerciseHtmlCssExercise: typeof import("../components/exercise/HtmlCssExercise.vue")['default']
export const ExerciseMatchingExercise: typeof import("../components/exercise/MatchingExercise.vue")['default']
export const ExerciseMcqExercise: typeof import("../components/exercise/McqExercise.vue")['default']
export const ExerciseOrderingExercise: typeof import("../components/exercise/OrderingExercise.vue")['default']
export const LayoutFondoTecnologico: typeof import("../components/layout/FondoTecnologico.vue")['default']
export const LayoutFooterBar: typeof import("../components/layout/FooterBar.vue")['default']
export const LayoutHeaderNav: typeof import("../components/layout/HeaderNav.vue")['default']
export const LayoutMarcaST: typeof import("../components/layout/MarcaST.vue")['default']
export const LayoutNotificationBell: typeof import("../components/layout/NotificationBell.vue")['default']
export const LayoutSidebarNav: typeof import("../components/layout/SidebarNav.vue")['default']
export const PerfilForm: typeof import("../components/perfil/Form.vue")['default']
export const TutorChatDrawer: typeof import("../components/tutor/TutorChatDrawer.vue")['default']
export const TutorKeyPanel: typeof import("../components/tutor/TutorKeyPanel.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCodeEditor: LazyComponent<typeof import("../components/CodeEditor.vue")['default']>
export const LazyDocenteCurriculumBuilderModals: LazyComponent<typeof import("../components/docente/CurriculumBuilderModals.vue")['default']>
export const LazyDocenteExercisePreview: LazyComponent<typeof import("../components/docente/ExercisePreview.vue")['default']>
export const LazyDocenteExerciseTypeIcon: LazyComponent<typeof import("../components/docente/ExerciseTypeIcon.vue")['default']>
export const LazyDocenteLessonEditor: LazyComponent<typeof import("../components/docente/LessonEditor.vue")['default']>
export const LazyDocenteTutorSettingsPanel: LazyComponent<typeof import("../components/docente/TutorSettingsPanel.vue")['default']>
export const LazyDocenteUnitExercisesPanel: LazyComponent<typeof import("../components/docente/UnitExercisesPanel.vue")['default']>
export const LazyDocenteUnitLessonsModal: LazyComponent<typeof import("../components/docente/UnitLessonsModal.vue")['default']>
export const LazyDocenteExerciseBuildersCodingExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/CodingExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersDragDropExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/DragDropExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersFillCodeExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/FillCodeExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersHtmlCssExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/HtmlCssExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersMatchingExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/MatchingExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersMcqExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/McqExerciseBuilder.vue")['default']>
export const LazyDocenteExerciseBuildersOrderingExerciseBuilder: LazyComponent<typeof import("../components/docente/exercise-builders/OrderingExerciseBuilder.vue")['default']>
export const LazyExerciseDragDropExercise: LazyComponent<typeof import("../components/exercise/DragDropExercise.vue")['default']>
export const LazyExerciseFillCodeExercise: LazyComponent<typeof import("../components/exercise/FillCodeExercise.vue")['default']>
export const LazyExerciseHtmlCssExercise: LazyComponent<typeof import("../components/exercise/HtmlCssExercise.vue")['default']>
export const LazyExerciseMatchingExercise: LazyComponent<typeof import("../components/exercise/MatchingExercise.vue")['default']>
export const LazyExerciseMcqExercise: LazyComponent<typeof import("../components/exercise/McqExercise.vue")['default']>
export const LazyExerciseOrderingExercise: LazyComponent<typeof import("../components/exercise/OrderingExercise.vue")['default']>
export const LazyLayoutFondoTecnologico: LazyComponent<typeof import("../components/layout/FondoTecnologico.vue")['default']>
export const LazyLayoutFooterBar: LazyComponent<typeof import("../components/layout/FooterBar.vue")['default']>
export const LazyLayoutHeaderNav: LazyComponent<typeof import("../components/layout/HeaderNav.vue")['default']>
export const LazyLayoutMarcaST: LazyComponent<typeof import("../components/layout/MarcaST.vue")['default']>
export const LazyLayoutNotificationBell: LazyComponent<typeof import("../components/layout/NotificationBell.vue")['default']>
export const LazyLayoutSidebarNav: LazyComponent<typeof import("../components/layout/SidebarNav.vue")['default']>
export const LazyPerfilForm: LazyComponent<typeof import("../components/perfil/Form.vue")['default']>
export const LazyTutorChatDrawer: LazyComponent<typeof import("../components/tutor/TutorChatDrawer.vue")['default']>
export const LazyTutorKeyPanel: LazyComponent<typeof import("../components/tutor/TutorKeyPanel.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
