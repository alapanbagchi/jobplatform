import { Input } from "@/components/Shared/Input"

const LoginPage = () => {
    return (
        <div>
            <Input
                name="email"
                error=""
                label="Enter your email address"
                type="email"
                placeholder="Ex: alapanbagchi.personal@gmail.com"
            />
        </div>
    )
}