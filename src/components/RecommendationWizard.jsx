import { useMemo, useState } from 'react';
import defaultTools from '../data/tools';

const MAX_NEEDS = 3;

const ROLE_OPTIONS = [
  { id: '1l-student', label: '🎓 1L Student' },
  { id: '2l-3l-student', label: '📚 2L/3L Student' },
  { id: 'faculty', label: '👩‍🏫 Faculty' },
  { id: 'clinic-student', label: '⚖️ Clinic Student' },
  { id: 'librarian', label: '📖 Librarian' }
];

const NEED_OPTIONS = [
  { id: 'legal-research', label: '🔍 Legal Research' },
  { id: 'writing', label: '✍️ Writing & Drafting' },
  { id: 'citation-research', label: '📝 Citation & Bluebook' },
  { id: 'contract-analysis', label: '📄 Document Review' },
  { id: 'data-analysis', label: '📊 Data Analysis' },
  { id: 'presentations', label: '🎬 Presentations' },
  { id: 'deep-research', label: '🔬 Deep Research' }
];

const PREFERENCES = {
  budget: {
    label: 'Budget',
    options: [
      { id: 'free-stanford', label: 'Free/Stanford only' },
      { id: 'open-paid', label: 'Open to paid' }
    ]
  },
  privacy: {
    label: 'Privacy',
    options: [
      { id: 'max-privacy', label: 'Maximum privacy' },
      { id: 'standard-ok', label: 'Standard OK' }
    ]
  },
  experience: {
    label: 'Experience',
    options: [
      { id: 'beginner', label: 'AI beginner' },
      { id: 'comfortable', label: 'Comfortable with AI' }
    ]
  }
};

const SCORE_WEIGHTS = {
  role: 6,
  primaryNeed: 9,
  secondaryNeed: 5,
  budget: 4,
  privacy: 4,
  experience: 3
};

const fitBudget = (tool, budgetChoice) => {
  if (budgetChoice === 'open-paid') return true;
  return ['free', 'freemium', 'stanford-licensed'].includes(tool.pricing);
};

const fitPrivacy = (tool, privacyChoice) => {
  if (privacyChoice === 'standard-ok') return true;
  return ['stanford-approved', 'standard'].includes(tool.privacyLevel);
};

const fitExperience = (tool, experienceChoice) => {
  if (experienceChoice === 'comfortable') return true;
  return tool.skillLevel === 'beginner' || tool.skillLevel === 'intermediate';
};

const scoreTool = (tool, state) => {
  let score = 0;
  const reasons = [];

  if (tool.userRoles.includes(state.role)) {
    score += SCORE_WEIGHTS.role;
    reasons.push(`Fits your role (${ROLE_OPTIONS.find((role) => role.id === state.role)?.label.replace(/^..\s/, '')}).`);
  }

  state.needs.forEach((need, index) => {
    if (tool.category === need) {
      score += index === 0 ? SCORE_WEIGHTS.primaryNeed : SCORE_WEIGHTS.secondaryNeed;
      const matchedNeed = NEED_OPTIONS.find((option) => option.id === need)?.label.replace(/^..\s/, '');
      reasons.push(`Strong for ${matchedNeed}.`);
    }
  });

  if (fitBudget(tool, state.preferences.budget)) {
    score += SCORE_WEIGHTS.budget;
    reasons.push(
      state.preferences.budget === 'free-stanford'
        ? 'Matches your budget preference (free/Stanford-accessible).'
        : 'Includes paid and premium capabilities you are open to.'
    );
  }

  if (fitPrivacy(tool, state.preferences.privacy)) {
    score += SCORE_WEIGHTS.privacy;
    reasons.push(
      state.preferences.privacy === 'max-privacy'
        ? 'Aligned with stronger privacy expectations.'
        : 'Privacy posture is suitable for general workflows.'
    );
  }

  if (fitExperience(tool, state.preferences.experience)) {
    score += SCORE_WEIGHTS.experience;
    reasons.push(
      state.preferences.experience === 'beginner'
        ? 'Good fit for getting started with AI tools.'
        : 'Powerful enough for experienced AI users.'
    );
  }

  return {
    ...tool,
    score,
    reasons: reasons.slice(0, 3)
  };
};

const initialState = {
  role: '',
  needs: [],
  preferences: {
    budget: 'free-stanford',
    privacy: 'max-privacy',
    experience: 'beginner'
  }
};

export default function RecommendationWizard({ tools = defaultTools }) {
  const [step, setStep] = useState(1);
  const [wizardState, setWizardState] = useState(initialState);

  const recommendations = useMemo(() => {
    if (!wizardState.role || wizardState.needs.length === 0) return [];

    return tools
      .map((tool) => scoreTool(tool, wizardState))
      .filter((tool) => tool.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [tools, wizardState]);

  const selectedRole = wizardState.role;

  const toggleNeed = (needId) => {
    setWizardState((prev) => {
      if (prev.needs.includes(needId)) {
        return { ...prev, needs: prev.needs.filter((need) => need !== needId) };
      }
      if (prev.needs.length >= MAX_NEEDS) return prev;
      return { ...prev, needs: [...prev.needs, needId] };
    });
  };

  const setPreference = (key, value) => {
    setWizardState((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const resetWizard = () => {
    setWizardState(initialState);
    setStep(1);
  };

  const progress = (step / 4) * 100;

  return (
    <section className="mx-auto max-w-5xl rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-on-surface-variant">
          <span className="font-semibold">Step {step} of 4</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
          <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">Who are you?</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ROLE_OPTIONS.map((role) => (
              <button
                key={role.id}
                onClick={() => setWizardState((prev) => ({ ...prev, role: role.id }))}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  selectedRole === role.id
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-outline-variant/30 bg-surface hover:border-primary/40'
                }`}
              >
                <p className="text-base font-medium">{role.label}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-on-surface">What do you need?</h2>
          <p className="text-sm text-on-surface-variant">Choose up to 3 needs ({wizardState.needs.length}/{MAX_NEEDS} selected).</p>
          <div className="grid gap-3 md:grid-cols-2">
            {NEED_OPTIONS.map((need) => {
              const isSelected = wizardState.needs.includes(need.id);
              const isDisabled = !isSelected && wizardState.needs.length >= MAX_NEEDS;
              return (
                <button
                  key={need.id}
                  onClick={() => toggleNeed(need.id)}
                  disabled={isDisabled}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    isSelected
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-outline-variant/30 bg-surface hover:border-primary/40'
                  } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <p className="text-base font-medium">{need.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-on-surface">Preferences</h2>
          {Object.entries(PREFERENCES).map(([key, config]) => (
            <div key={key} className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant">{config.label}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {config.options.map((option) => {
                  const isActive = wizardState.preferences[key] === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setPreference(key, option.id)}
                      className={`rounded-xl border p-4 text-left transition-colors ${
                        isActive
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-outline-variant/30 bg-surface hover:border-primary/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-on-surface">Results</h2>
          <div className="grid gap-4">
            {recommendations.slice(0, 5).map((tool) => (
              <article key={tool.id} className="rounded-xl border border-outline-variant/30 bg-surface p-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">Match {tool.score}</span>
                </div>
                <p className="text-sm text-on-surface-variant">{tool.description}</p>
                <p className="text-sm font-semibold text-on-surface">Why we recommend this</p>
                <ul className="list-disc pl-5 text-sm text-on-surface-variant space-y-1">
                  {tool.reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {recommendations.length === 0 && (
            <p className="rounded-xl border border-dashed border-outline-variant p-4 text-sm text-on-surface-variant">
              No strong matches yet. Try adjusting your role, needs, or preferences.
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-primary px-4 py-2 font-semibold text-on-primary">Compare top picks</button>
            <button
              onClick={() => setStep(3)}
              className="rounded-lg border border-outline-variant/40 bg-surface px-4 py-2 text-on-surface-variant"
            >
              Adjust preferences
            </button>
            <button
              onClick={resetWizard}
              className="rounded-lg border border-outline-variant/40 bg-surface px-4 py-2 text-on-surface-variant"
            >
              Retake
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
        <button
          onClick={() => setStep((prev) => Math.max(1, prev - 1))}
          disabled={step === 1}
          className="rounded-lg border border-outline-variant/40 px-4 py-2 text-sm text-on-surface-variant disabled:opacity-40"
        >
          Back
        </button>

        {step < 4 ? (
          <button
            onClick={() => setStep((prev) => Math.min(4, prev + 1))}
            disabled={(step === 1 && !wizardState.role) || (step === 2 && wizardState.needs.length === 0)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary disabled:opacity-40"
          >
            Next
          </button>
        ) : (
          <button onClick={resetWizard} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary">
            Start over
          </button>
        )}
      </div>
    </section>
  );
}
