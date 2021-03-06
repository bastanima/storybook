import { styled } from '@storybook/theming';

export const Actions = styled.pre({
  flex: 1,
  margin: 0,
  padding: '10px 5px 20px',
  overflowY: 'auto',
  color: '#666',
});

export const Action = styled.div({
  display: 'flex',
  padding: '0',
  borderLeft: '5px solid transparent',
  borderBottom: '1px solid transparent',
  transition: 'all 0.1s',
  alignItems: 'flex-start',
});

export const Counter = styled.div(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: theme.color.inverseText,
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.bold,
  lineHeight: 1,
  padding: '1px 5px',
  borderRadius: '20px',
  margin: '2px 0px',
}));

export const InspectorContainer = styled.div({
  flex: 1,
  padding: '0 0 0 5px',
});

export const Wrapper = styled.div({
  flex: 1,
  display: 'flex',
  position: 'relative',
  height: '100%',
});
