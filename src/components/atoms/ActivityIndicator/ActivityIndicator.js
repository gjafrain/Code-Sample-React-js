import { Icon as SIcon } from 'semantic-ui-react'

export default function ActivityIndicator({ size = '', color }) {
    return (
        <SIcon loading name='spinner' color={color} size={size} />
    );
}
